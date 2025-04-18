import type {NextApiRequest, NextApiResponse} from 'next';
import {emailTransporter, runApiMiddleware, validateContactData} from '../../../src/api/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await runApiMiddleware(req, res, ['POST', 'HEAD']);

  const contactData = JSON.parse(req.body);
  const {name, email, phone, reason, hear, company, jobTitle, message} = contactData;

  // Validate the contact data
  const validation = validateContactData(contactData, ['name', 'email', 'reason', 'hear', 'company']);
  if (!validation.isValid) {
    res.status(400).json({
      status: 400,
      error: 'Invalid form data',
      details: validation.error,
    });
    return;
  }

  // Prepare email content
  const emailContent = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Reason: ${reason}
    How did they hear about us: ${hear}
    Company: ${company}
    Job Title: ${jobTitle}
    Message: ${message}
  `;

  try {
    // Send email to contact form address
    await emailTransporter.sendMail({
      from: process.env.CONTACT_FORM_FROM_EMAIL,
      to: process.env.CONTACT_FORM_TO_EMAIL,
      subject: 'New Contact Form Submission',
      text: emailContent,
    });

    // Send confirmation email to submitter
    await emailTransporter.sendMail({
      from: process.env.CONTACT_FORM_FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting S3 Partners',
      text: `Dear ${name},\n\nThank you for contacting S3 Partners. We have received your message and will get back to you shortly.\n\nBest regards,\nS3 Partners Team`,
    });

    // Try to subscribe to Mailchimp, but don't fail if it errors
    try {
      const postData = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          NAME: name,
          PHONE: phone,
          REASON: reason,
          HEAR: hear,
          COMPANY: company,
          JOB_TITLE: jobTitle,
          MESSAGE: message,
        },
      };

      await fetch(
        `https://${process.env.MAILCHIMP_ZONE}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_CONTACT_LIST}/members`,
        {
          method: 'POST',
          headers: {
            Authorization: `auth ${process.env.MAILCHIMP_TOKEN}`,
          },
          body: JSON.stringify(postData),
        }
      );
    } catch (mailchimpError) {
      // Log Mailchimp error but don't fail the request
      console.error('Mailchimp subscription failed:', mailchimpError);
    }

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
