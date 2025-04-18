import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';
import Cors from 'cors';

type CorsMethods = ('POST' | 'HEAD' | 'PUT' | 'GET')[];

export const runApiMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  corsMethods: CorsMethods
): Promise<any> => {
  return new Promise((resolve, reject) => {
    Cors({methods: corsMethods})(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

// Configure email transporter
export const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const validateContactData = (data: any, requiredFields: string[]) => {
  const missingFields = requiredFields.filter(field => !data[field]);

  if (missingFields.length > 0) {
    return {
      isValid: false,
      error: `Missing required fields: ${missingFields.join(', ')}`,
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      isValid: false,
      error: 'Invalid email format',
    };
  }

  return {
    isValid: true,
    error: null,
  };
};
