import type {NextApiRequest, NextApiResponse} from 'next';
import {runApiMiddleware} from '../../../src/api/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await runApiMiddleware(req, res, ['POST', 'PUT', 'HEAD']);

  const {name, email, file, option, description, jobTitle} = JSON.parse(req.body);

  const uploadBody = JSON.stringify({
    name: `${name}.pdf`,
    file_data: file.split('base64,')[1],
  });

  const headerAuth = {
    Authorization: `auth ${process.env.MAILCHIMP_TOKEN}`,
  };

  const searchApi = await fetch(
    `https://${process.env.MAILCHIMP_ZONE}.api.mailchimp.com/3.0/lists/${
      process.env.MAILCHIMP_CAREER_LIST
    }/members/${email.toLowerCase()}`,
    {
      method: 'GET',
      headers: headerAuth,
    }
  );
  const searchJson = await searchApi.json();

  if (searchJson.id !== undefined && searchJson.email_address !== undefined) {
    const uploadApi = await fetch(`https://${process.env.MAILCHIMP_ZONE}.api.mailchimp.com/3.0/file-manager/files`, {
      method: 'POST',
      headers: headerAuth,
      body: uploadBody,
    });

    const uploadJson = await uploadApi.json();

    if (uploadJson.id !== undefined && uploadJson.full_size_url !== undefined) {
      const fileAddress = uploadJson.full_size_url;

      const updateApi = await fetch(
        `https://${process.env.MAILCHIMP_ZONE}.api.mailchimp.com/3.0/lists/${
          process.env.MAILCHIMP_CAREER_LIST
        }/members/${email.toLowerCase()}`,
        {
          method: 'PUT',
          headers: headerAuth,
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              OPTION: option,
              DESCRIPTIO: description,
              FILE: fileAddress,
              JOB_TITLE: `${searchJson.merge_fields.JOB_TITLE} - ${jobTitle}`,
            },
          }),
        }
      );
      const updateJson = await updateApi.json();
      if (updateJson.id !== undefined && updateJson.email_address !== undefined) {
        res.json({status: 200});
      } else {
        console.error(updateJson);
        res.json({status: 500});
      }
    } else {
      console.error(uploadJson);
      res.json({status: 500});
    }
  } else {
    const uploadApi = await fetch(`https://${process.env.MAILCHIMP_ZONE}.api.mailchimp.com/3.0/file-manager/files`, {
      method: 'POST',
      headers: headerAuth,
      body: uploadBody,
    });

    const uploadJson = await uploadApi.json();
    if (uploadJson.id !== undefined && uploadJson.full_size_url !== undefined) {
      const fileAddress = uploadJson.full_size_url;
      const addApi = await fetch(
        `https://${process.env.MAILCHIMP_ZONE}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_CAREER_LIST}/members`,
        {
          method: 'POST',
          headers: headerAuth,
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              OPTION: option,
              DESCRIPTIO: description,
              FILE: fileAddress,
              JOB_TITLE: jobTitle,
            },
          }),
        }
      );
      const addJson = await addApi.json();
      if (addJson.id !== undefined && addJson.email_address !== undefined) {
        res.json({status: 200});
      } else {
        console.error(addJson);
        res.json({status: 500});
      }
    } else {
      console.error(uploadJson);
      res.json({status: 500});
    }
  }
};

export default handler;
