import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Domain *****

export default async (req, res) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Tawfeeq <mohammedtawfeeq945@gmail.com>',
      to: ['tawfeeq.coding@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
