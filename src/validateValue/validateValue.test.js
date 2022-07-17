const validateValue = require("./validateValue");

describe("Тест валидации значений", () => {
  test("Корректное значение", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Меньше корректного", () => {
    expect(validateValue(-50)).toBe(false);
  });
  test("Больше корректного", () => {
    expect(validateValue(150)).toBe(false);
  });
  test("Граничное значение снизу", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Граничное значение сверху", () => {
    expect(validateValue(100)).toBe(true);
  });
});
