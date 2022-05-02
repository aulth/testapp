// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "../../middleware/db"
import User from "../../models/User"
console.log('hello')
connectToDb()
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
