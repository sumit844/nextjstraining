import productDetailCollection from "@/model/products"
import connectMongoDB from "@/middlewares/connectMongoDB"

const myinfonew = async (req, res) => {

    if (req.method == "POST") {
        try {
            var bodyData=req.body;
            var newDocument = new productDetailCollection(bodyData);
            var responseData = await newDocument.save();
            res.status(200).json(responseData)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }

    } else {

        res.status(400).json("Request Method is not correct")
    }

}
export default connectMongoDB(myinfonew);