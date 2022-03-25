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

    it('add 40cts and request Expresso', () => {
      expect(coffeemachine.buy("Expresso", 0.40)).toBe(drink1);
    })

    it('add 10cts and request Expresso', () => {
      expect(coffeemachine.buy("Expresso", 0.10)).toBe(`You need 0.3 more`);
    })

    it('add 600cts and request Expresso', () => {
      drink1.change = 0.1;
      expect(coffeemachine.buy("Expresso", 0.60)).toBe(drink1);
    })
});
