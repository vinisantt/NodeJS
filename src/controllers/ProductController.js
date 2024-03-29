const mogoose = require('mongoose');

const Product = mogoose.model('Product');

module.exports = {
    async index(req, res){
        const { page } = req.query;
        const products = await Product.paginate({},{page, limit: 5});

        return res.json(products);
    },
    async store(req, res){
        
        const product = await Product.create(req.body);
        
        return res.json(product);
    },
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new : true });
        
        return res.json(product);

    },
    async destroy(req, res){
        const product = await Product.findByIdAndDelete(req.params.id);

        return res.send();

    }
};