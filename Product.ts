class Product
{
    private name : string;
    private price: number;

    constructor(name :string, price : number)
    {
        this.name =name;
        this.price = price; 
    }

    print() : void 
    {
        console.log(this.name);
        console.log(this.price);
    }
}

var obj = new Product("iPhone7 plus", 70000);
obj.print(); 