// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {user} from '../../db'

type Data = {
  firstName:string,
    lastName:string,
    emailAddress:string,
    mobileNumber:string,
    password:string,
    confirmPassword:string,

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ firstName: 'Satya', lastName:'Prakash',emailAddress:'s@gmail.com',mobileNumber:'567',password:'wrr@',confirmPassword:'wrr@' })
}

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   if (req.method === 'POST') {
//     // Assuming you want to handle the POST request here
//     // You can access the request body using req.body
//     const requestBody: Data = req.body;

//     // Process the request data as needed
//     // For this example, we'll just echo the data back
//     res.status(200).json(requestBody);
//   } else {
//     // res.status(405).json({ error: 'Method not allowed' });
//   }
// }
