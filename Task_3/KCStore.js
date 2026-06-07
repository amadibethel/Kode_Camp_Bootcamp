class KCStore {
    constructor() {
        this.products = [];
    }

    // Add Product
    addProduct(product) {
        this.products.push(product);
        return "Product added successfully";
    }

    // View All Products
    viewProducts() {
        return this.products;
    }

    // Update Product
    updateProduct(id, updatedDetails) {
        const product = this.products.find(
            product => product.id === id
        );

        if (!product) {
            return "Product not found";
        }

        Object.assign(product, updatedDetails);
        return "Product updated successfully";
    }

    // Delete Product
    deleteProduct(id) {
        const index = this.products.findIndex(
            product => product.id === id
        );

        if (index === -1) {
            return "Product not found";
        }

        this.products.splice(index, 1);
        return "Product deleted successfully";
    }
}

