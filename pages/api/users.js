
 

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

  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.phone || !data.email || !data.dateOfBirth)
      return res
        .status(400)
        .json({ status: "failed", message: "Invalid data" });

    try {
      const user = await User.create(data);
      res
        .status(201)
        .json({ status: "success", message: "Data created", data: user });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error in storing data in DB",
      });
    }
  }
  if (req.method === "GET"){
    const user = await User.find()
    res.status(200).json({status : "success" , data : user})
  }
}
