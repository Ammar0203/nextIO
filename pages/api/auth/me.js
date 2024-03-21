import auth from "utils/auth";

const handler = (req, res) => {
  const { id, name, email } = req.user
  return res.status(200).json({
    data: {
      id, name, email
    }
  })
}

export default auth(handler)