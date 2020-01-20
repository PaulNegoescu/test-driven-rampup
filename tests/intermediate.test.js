const task = require('../src/intermediate');

describe('Reverses a string', () => {
  test('With no special characters', () => {
    expect(task.reverseString('HelloWorld')).toBe('dlroWolleH');
  });
  
  test('With special characters', () => {
    expect(task.reverseString('Hello World! 123')).toBe('321 !dlroW olleH');
  });

  test('Does not call array reverse', () => {
    const reverseSpy = jest.spyOn(Array.prototype, 'reverse');
    task.reverseString('HelloWorld');
    
    expect(reverseSpy).not.toHaveBeenCalled();
  });
});

describe('Checks for a palindrome', () => {
  test('Simple string', () => {
    expect(task.isPalindrome('tacoocat')).toBe(true);
  });
  
  test('Ignore capital letters', () => {
    expect(task.isPalindrome('TacoCat')).toBe(true);
  });
  
  test('Returns false when not a palindrome', () => {
    expect(task.isPalindrome('Hello World')).toBe(false);
  });
  
  test('Expert - Ignore spaces', () => {
    expect(task.isPalindrome('Taco Cat')).toBe(true);
  });
  
  test('Expert - Don\'t ignore other special characters', () => {
    expect(task.isPalindrome('Taco Cat!')).toBe(false);
  });
});

describe("Can reverse a number", () => {
  test('Simple number', () => {
    expect(task.reverseNumber(123)).toBe(321);
  });
  
  test('Numeric string', () => {
    expect(task.reverseNumber('123')).toBe(321);
  });

  test('Decimal number', () => {
    expect(task.reverseNumber(1.23)).toBe(32.1);
  });

  test('Negative number, preserve sign', () => {
    expect(task.reverseNumber(-123)).toBe(-321);
  });
});

describe('Returns fizz buzz', () => {
  test('Up to ten', () => {
    expect(task.fizzBuzz(10)).toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz']);
  });

  test('Up to eighteen', () => {
    expect(task.fizzBuzz(18)).toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz', 'buzz',11,'fizz',13,14,'fizzbuzz',16,17,'fizz']);
  });

  test('Any divisor', () => {
    expect(task.fizzBuzz(15,7,2)).toEqual([1,'buzz',3,'buzz',5,'buzz','fizz','buzz',9,'buzz',11,'buzz',13,'fizzbuzz',15]);
  })
});

