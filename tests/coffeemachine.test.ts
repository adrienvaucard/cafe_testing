import { CoffeeMachine } from "../src/entities/coffeemachine";
import { ChangeMachine } from "../src/entities/changemachine";
import { PaymentType } from "../src/enums/paymentType.enum";
import { Drink } from "../src/entities/drink";
import Payment from "../src/entities/payment";

describe('Coffee Machine tests', () => {
    let coffeemachine: CoffeeMachine;
    let changeMachine: ChangeMachine;
    let payment: Payment;
    let drink1: Drink;
    let drink2: Drink;
    let drink3: Drink;
    let drink4: Drink;
    let drink5: Drink;
    let drinks: Drink[];

    beforeEach(() => {
      payment = new Payment(PaymentType.CHANGE);
      changeMachine = new ChangeMachine(0, payment);
      drink1 = new Drink("Expresso", 0.40);
      drink2 = new Drink("Pisse", 0.40);
      drink3 = new Drink("Soupe", 0.40);
      drink4 = new Drink("Café noisette", 0.40);
      drink5 = new Drink("Déca", 0.40);
      drinks = [
        drink1,
        drink2,
        drink3,
        drink4,
        drink5
      ]
      coffeemachine = new CoffeeMachine(changeMachine, drinks, 50);
    });

    it.each`
    money               | coffeeName      | result
    ${0.40}             | ${"Expresso"}   | ${new Drink("Expresso", 0.40)} 
    ${0.10}             | ${"Expresso"}   | ${'You need 0.3 more'} 
    ${0.60}             | ${"Expresso"}   | ${new Drink("Expresso", 0.40, 0.2)}  
    ${0.40}             | ${"Sousoupe"}   | ${'This drink is out of stock'}
    ${1}                | ${"Soupe"}      | ${new Drink("Soupe", 0.4, 0.6)}
    `('Test coffee serving with differents money amounts', ({ coffeeName, money, result }) => {
        expect(coffeemachine.buy(coffeeName, money)).toEqual(result);
    });
});
