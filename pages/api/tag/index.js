import dbConnect from "utils/dbConnect";
import Tag from "models/tag";

const handler = async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "GET":
      return res.status(200).json({
        data: await Tag.find(),
      });
      break;
    case "POST":
      const { name, slug, description } = req.body;
      const tag = await Tag.create({ name, slug, description });
      return res.status(201).json({
        data: tag,
      });
      break;
    default:
      return res.status(405).json({ message: "error" });
      break;
  }
};

export default handler