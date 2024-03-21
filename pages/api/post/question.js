import auth from "utils/auth";
import Post from "models/post";

const handler = async (req, res) => {
  if(req.method !== "POST") return res.status(405).json({message: 'wrong method'})
  const user = req.user.id
  const { title, content, tags } = req.body

  const question = await Post.create({ question: { title }, content, user, tags })

  return res.status(201).json({
    data: {
      id: question.id
    }
  })
}

export default auth(handler)