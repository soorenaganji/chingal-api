import User from "@/models/User";
import connectDB from "@/utils/connectDB";
export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
    return;
  }
  const { userId } = req.query;
  if (req.method === "PATCH") {
    const data = req.body;
    try {
      const user = await User.findById(userId);
      user.name = data.name;
      user.phone = data.phone
      user.email = data.email;
      user.country = data.country;
      user.city = data.city;
      user.street = data.street;
      user.zipcode = data.zipcode;
      user.dateOfBirth = data.dateOfBirth;
      user.updatedAt = Date.now();
      user.save();
      res.status(200).json({ status: "success", data: user });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Error in internal server" });
    }
  }
}