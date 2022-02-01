import initDB from "../../../utils/initDB";
import User from "../../../modals/User";
initDB();

export default async function handler(req, res) {
  console.log(req.query)
  let {users} = req.query || [];
  console.log(users)
  let usersArr = users[0].split(",");
  switch (req.method) {
    case "GET":
      try {
        const users = await User.find({ email: usersArr }).sort({ _id: -1 });
        return res.status(200).json(users);
      } catch (error) {
        console.log("hey get", error);
        return res.status(500).json({ error: error });
      }
  }
}
