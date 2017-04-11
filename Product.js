var Product = (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.print = function () {
        console.log(this.name);
        console.log(this.price);
    };
    return Product;
}());
var obj = new Product("iPhone7 plus", 70000);
obj.print();
