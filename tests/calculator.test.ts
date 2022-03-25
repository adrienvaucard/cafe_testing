import { Calculator } from "../src/entities/calculator";

describe('Calculator tests', () => {
    let calculator: Calculator;

    beforeEach(() => calculator = new Calculator());

    it('adds 10 cts + 20 cts = 30 cts', () => {
        
      expect(calculator.sum(0.1, 0.2)).toBe(0.3);
    })
});
