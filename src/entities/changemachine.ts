import Payment from "./payment";

export class ChangeMachine {
    money: number;
    payment: Payment;

    constructor(money: number, payment: Payment){
        this.money = money;
        this.payment = payment;
    }

    public getMoney(): number {
        return this.money;
    }  
}

export default ChangeMachine;