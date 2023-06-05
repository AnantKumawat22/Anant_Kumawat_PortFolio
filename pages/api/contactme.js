import initMiddleware from '../../lib/init-middleware'
import validateMiddleware from '../../lib/validate-middleware';
import { check } from 'express-validator';
import sendEmail from '../../lib/sendemail';
require('dotenv').config();

// Validate input fields.
const validateBody = initMiddleware(
  validateMiddleware([
    check('name', 'Name must have atleast 3 characters and atmost 40 characters.').isLength({ min: 3, max: 40 }),
    check('email', 'Enter a valid email.').isEmail(),
    check(
      'message', 'Message must have atleast 3 characters.').isLength({ min: 3 }),
  ])
);


export default async function handler(req, res) {
  if(req.method == "POST"){
    const { name, email, message } = req.body;

    try {
      // Validating input fields.
      await validateBody(req, res);

      await sendEmail(name, email, message);

      return res.status(200).json({
        msg: "Your message has been sent successfully. Thank you for contacting me.",
        issuccess: true,
      });

    } catch (error) {
      res.status(500).json({ msg: 'Internal Server Error', issuccess: false });
    }
  }

}
