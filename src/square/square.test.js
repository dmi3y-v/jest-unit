const square = require("./square");

describe("square", () => {
  let number = 0;
  let expectedResult = 0;

  beforeEach(() => {
    number = 10;
    expectedResult = number * number;
  });

  test(`${number}^2 = ${expectedResult}`, () => {
    expect(square(number)).toBe(expectedResult);
  });
  // test(`${number}^2 = ${expectedResult}`, () => {
  //   expect(square(number)).toBe(expectedResult);
  // });

  // test("spy for 2", () => {
  //   const spyMathPow = jest.spyOn(Math, "pow");
  //   square(2);
  //   expect(spyMathPow).toBeCalledTimes(1);
  // });
  // test("spy for 1", () => {
  //   const spyMathPow = jest.spyOn(Math, "pow");
  //   square(1);
  //   expect(spyMathPow).toBeCalledTimes(0);
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  /