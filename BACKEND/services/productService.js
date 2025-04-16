const productModel = require('../models/productModel')
class ProductService{

    async getAllProducts(){
        return await productModel.getAllProducts();
    }

    async getProductById(id){
        return await productModel.getProductById(id);
    }

    async addProduct(data){
        return await productModel.createProduct(data);
    }

    async modifyProduct(id, data){
        return await productModel.updateProduct(id, data);
    }
    
    async removeProduct(id){
        return await productModel.deleteProduct(id);
    }
}

module.exports = new ProductService();