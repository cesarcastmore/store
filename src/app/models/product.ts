export class Product {

    public name: string = '';
    public price: number = 20.99;

    public quantity: number = 1;

    public size: number = 0;
    public color: string = '';

    public id: string | null='';



    //Vamos a cambiar el formato de la fecha a un formato MXN
    public date: Date= new Date();


    //Esta variable va ser un timestamp y la vamos a usar en el pipe date
    public created: number=0;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }


    public getAmount(): number {
        return this.price * this.quantity;

    }

    public setCreated(timestamp: number){
        
    }




}
