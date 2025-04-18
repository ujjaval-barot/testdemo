import type {NextApiRequest, NextApiResponse} from 'next';
import {emailTransporter, runApiMiddleware, validateContactData} from '../../../src/api/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await runApiMiddleware(req, res, ['POST', 'HEAD']);

  const contactData = JSON.parse(req.body || '{}');
  const {name, email, phone, company, jobTitle} = contactData;

  const validation = validateContactData(contactData, ['name', 'email', 'company']);
  if (!validation.isValid) {
    res.status(400).json({
      status: 400,
      error: 'Invalid form data',
      details: validation.error,
    });
    return;
  }

  const emailContent = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Company: ${company}
    Job Title: ${jobTitle}
  `;

  try {
    await emailTransporter.sendMail({
      from: process.env.CONTACT_FORM_FROM_EMAIL,
      to: process.env.CONTACT_FORM_TO_EMAIL,
      subject: 'Article Access Request',
      text: emailContent,
    });

    res.json({status: 200});
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({
      status: 500,
      error: error instanceof Error ? error.message : 'Email sending failed',
    });
  }
};

export default handler;
