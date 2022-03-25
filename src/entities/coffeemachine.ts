import ChangeMachine from "./changemachine";
import Drink from "./drink";

export class CoffeeMachine {
    amount: ChangeMachine;
    drinks: Drink[];
    nbStirrers: number;

    constructor(amount: ChangeMachine, drinks: Drink[], nbStirrers: number){
        this.amount = amount;
        this.drinks = drinks;
        this.nbStirrers = nbStirrers;
    }
}

export default CoffeeMachine;