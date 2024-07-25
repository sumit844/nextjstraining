import productDetailCollection from "@/model/products"
import connectMongoDB from "@/middlewares/connectMongoDB"

const myinfonew = async (req, res) => {
    try {
        var data = await productDetailCollection.find();

        res.status(200).json(data);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }



}
export default connectMongoDB(myinfonew);