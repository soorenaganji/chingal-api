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
  const { userId } = req.query
  if (req.method === "DELETE") {
     try{
        await User.deleteOne({_id : userId})
        res.status(200).json({status : "success" , message : "data deleted successfully"})
     }catch(err){
        console.log(err);
        res
          .status(500)
          .json({ status: "failed", message: "Error in internal server" });
     }
  }
}