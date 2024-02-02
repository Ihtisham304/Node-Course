const productModel = require('../models/productModel');

exports.createProduct = (async (req, res) => {
    const data = req.body;
    try {
        const newproduct = await productModel.create(data);
        res.status(200).json({ newproduct, message: 'product created successFully' });
        console.log('data save successfully')
        console.log(newproduct);

    } catch (error) {
        console.log('error saving data');
        res.status(500).json({ message: 'while data saving' });
    }
})

exports.getAllProducts = (async (req, res) => {
    try {
        const data = await productModel.find();
        console.log('retrive all products');
        res.status(200).json(data);
        
    } catch (error) {
        console.log('error in retrive data');
        res.status(404).json({ message: 'error while reading data' });
    }
})
exports.getProduct = (async (req, res) => {
    const id = req.params.id;
    try {
        const data = await productModel.findById(id);
        res.status(200).json(data);
        console.log(data);
    } catch (error) {
        res.status(400).json({ message: 'error getting one product' });
        console.log('error get pro');
    }
})

exports.updateProduct = (async (req, res) => {
    const p_id = req.params.id;
    const updateData = req.body;
    try {
        const updatedproduct = await productModel.findByIdAndUpdate(p_id, updateData, { new: true });
        if (!updatedproduct) {
            return res.status(404).json({ message: 'product not found' });
        }
        console.log('product update success');
        res.status(200).json({ updatedproduct, message: 'updare product success' })
    } catch (error) {
        console.log('error updatig product');
        res.status(400).json({ message: 'product update error not found' });
    }
})
exports.deleteProduct = (async (req, res) => {
    const id = req.params.id;
    try {
        const deleteproduct = await productModel.findByIdAndDelete(id);
        console.log(`deleted product is\n ${deleteproduct}`);
        res.status(200).json({ message: 'delete success' });
    } catch (error) {
       console.log('error in deleting product');
       res.status(400).json({message:'error while deleting product'})
    }
})