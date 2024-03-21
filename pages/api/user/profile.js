import User from 'models/user'
import auth from 'utils/auth'

const handler = async (req, res) => {
  if(req.method !== "POST") return res.status(400).json({message: "wrong method"})
  const {name, email} = req.body
  try {
    await User.findByIdAndUpdate(req.user.id, { name, email })
    return res.status(200).json({success: true})
  } catch (error) {
    return res.status(400).json({error})
  }
}

export default auth(handler)