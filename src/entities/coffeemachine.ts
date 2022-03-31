import ChangeMachine from "./changemachine";
import Drink from "./drink";

export class CoffeeMachine {
    changeMachine: ChangeMachine;
    drinks: Drink[];
    nbStirrers: number;

    constructor(changeMachine: ChangeMachine, drinks: Drink[], nbStirrers: number){
        this.changeMachine = changeMachine;
        this.drinks = drinks;
        this.nbStirrers = nbStirrers;
    }

    getDrinkByName(name: string) { 
        return this.drinks.find(drink => drink.name == name);
    }

    getRemainingAmount(drinkName: string, amount: number) {
        let drink = this.getDrinkByName(drinkName) || null;
        if (drink) {
            let delta = drink.price - amount;
            return delta > 0 ? Math.round(delta * 100) / 100 : 0;
        } else {
            return "This drink doesn't exist";
        }
    }

    giveChange(drinkname: string, amount: number) {
        let drink = this.getDrinkByName(drinkname);
        if (drink) {
            let delta = amount - drink.price;
            return delta > 0 ? Math.round(delta * 100) / 100 : 0;
        }
    }

    buy(drinkName: string, amount: number) {
        let drink = this.getDrinkByName(drinkName) || null;
        if (drink) {
            if (drink.price > amount) {
                let amountRemaining = this.getRemainingAmount(drinkName, amount);
                return `You need ${amountRemaining} more`
            } else if (drink.price == amount) {
                return drink;
            } else {
                drink.change = this.giveChange(drinkName, amount);
                return drink;
            }
        } else {
            return `This drink is out of stock`
        }
    }
}

export default CoffeeMachine;