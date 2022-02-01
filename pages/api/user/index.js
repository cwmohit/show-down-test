import initDB from "../../../utils/initDB";
import User from "../../../modals/User";
initDB();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const users = await User.find().sort({ _id: -1 });
        return res.status(200).json(users);
      } catch (error) {
        console.log("hey get", error);
        return res.status(500).json({ error: error });
      }
    case "POST":
      try {
        const { full_name, email, username } = req.body;
        if (!full_name && !email) {
          return res
            .status(422)
            .json({ error: "please fill all the required fields" });
        }
        await new User({
          full_name,
          email,
          username,
        }).save();
        return res.status(200).json({ success: "post created" });
      } catch (error) {
        console.log("hey", error);
        return res.status(500).json({ error: error });
      }
  }
}
