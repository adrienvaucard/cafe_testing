export class Calculator {
    constructor() {}

    sum(a: number, b: number): number {
        let result = a + b;
        return Math.round(result * 100) / 100;
    }

    // isAmountEnough(drink: Drink, amount: number): boolean {
    //     if (amount < drink.price) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // amountRemaining(drink: Drink, amount: number): number {
    //     if (amount < drink.price) {
    //         return drink.price - amount;
    //     } else {
    //         return 0;
    //     }
    // }
}

export default Calculator;