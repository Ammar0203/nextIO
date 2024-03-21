import dbConnect from "utils/dbConnect"
import User from 'models/user'
import cookies from "utils/cookies"

const handler = async (req, res) => {
  if (req.method !== "POST") return res.status(400).send('wrong method') 
  await dbConnect()
  const { name, email, password } = req.body
  try {
    const user = await User.create({ name, email, password })
    console.log(user)
    const result = user.signJwt()
    res.cookie('accessToken', result.token, { httpOnly: true })
    return res.status(200).json({message: 'successfully'})
  } catch (error) {
    console.log(error)
    return res.status(400).json({error})
  }
}

export default cookies(handler)