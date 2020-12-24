const { fizzBuzz } = require('../exercise1');
describe('fizzBuzz', () => {
  it('Should throw exception if input not a number', () => {
    expect(() => {
      fizzBuzz('a');
    }).toThrow();
    expect(() => {
      fizzBuzz(null);
    }).toThrow();
    expect(() => {
      fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      fizzBuzz({});
    }).toThrow();
  });
  it('Should return Fizzbuzz if the input divisible by 3 and by 5', () => {
    const result = fizzBuzz(15);
    expect(result).toMatch(/FizzBuzz/);
  });
  it('Should return Fizz if the input divisible by 3', () => {
    const result = fizzBuzz(9);
    expect(result).toMatch(/Fizz/);
  });
  it('Should return Buzz if input divisible by 5', () => {
    const result = fizzBuzz(10);
    expect(result).toMatch(/Buzz/);
  });
  it('Should return the input if the input not divisible by 5 or 3', () => {
    const result = fizzBuzz(7);
    expect(result).toBe(7);
  });
});
