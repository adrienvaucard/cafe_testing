import { Calculator } from "../src/entities/calculator";

describe('Test Calculator sum', () => {
    let calculator: Calculator;

    beforeEach(() => calculator = new Calculator());

    test('adds 1 + 2 to equal 3', () => {
        
      expect(calculator.sum(1, 2)).toBe(3);
    })
});
