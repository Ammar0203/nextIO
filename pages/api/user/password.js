import auth from "utils/auth";

const handler = async (req, res) => {
  if(req.method !== "POST") return res.status(400).json({message: "wrong method"})

  const { password, newPassword } = req.body

  if(req.user.comparePassword(password)) {
    console.log(password, newPassword, req.user)
    req.user.password = newPassword
    await req.user.save()
    return res.status(200).json({success: true})
  }
  return res.status(400).json({success: false})
}

export default auth(handler)