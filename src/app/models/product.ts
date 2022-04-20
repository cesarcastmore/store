export class Product {

    public name: string = '';
    public price: number = 20.99;

    public quantity: number = 1;

    public size: number = 0;
    public color: string = '';

    public id: number=0;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }


    public getAmount(): number {
        return this.price * this.quantity;

    }




}
