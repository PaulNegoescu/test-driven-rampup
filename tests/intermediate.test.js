import {tasks} from '../src/intermediate.js'

describe('Reverses a string', () => {
  test('With no special characters', () => {
    expect(tasks.reverseString('HelloWorld')).toBe('dlroWolleH');
  });
  
  test('With special characters', () => {
    expect(tasks.reverseString('Hello World! 123')).toBe('321 !dlroW olleH');
  });

  test('Does not call array reverse', () => {
    const reverseSpy = jest.spyOn(Array.prototype, 'reverse');
    tasks.reverseString('HelloWorld');
    
    expect(reverseSpy).not.toHaveBeenCalled();
  });
});

describe('Checks for a palindrome', () => {
  test('Simple string', () => {
    expect(tasks.isPalindrome('tacoocat')).toBe(true);
  });
  
  test('Ignore capital letters', () => {
    expect(tasks.isPalindrome('TacoCat')).toBe(true);
  });
  
  test('Returns false when not a palindrome', () => {
    expect(tasks.isPalindrome('Hello World')).toBe(false);
  });
  
  test('Expert - Ignore spaces', () => {
    expect(tasks.isPalindrome('Taco Cat')).toBe(true);
  });
  
  test('Expert - Don\'t ignore other special characters', () => {
    expect(tasks.isPalindrome('Taco Cat!')).toBe(false);
  });
});

describe("Can reverse a number", () => {
  test('Simple number', () => {
    expect(tasks.reverseNumber(123)).toBe(321);
  });
  
  test('Numeric string', () => {
    expect(tasks.reverseNumber('123')).toBe(321);
  });

  test('Decimal number', () => {
    expect(tasks.reverseNumber(1.23)).toBe(32.1);
  });

  test('Negative number, preserve sign', () => {
    expect(tasks.reverseNumber(-123)).toBe(-321);
  });
});

describe('Returns fizz buzz', () => {
  test('Up to ten', () => {
    expect(tasks.fizzBuzz(10)).toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz']);
  });

  test('Up to eighteen', () => {
    expect(tasks.fizzBuzz(18)).toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz', 'buzz',11,'fizz',13,14,'fizzbuzz',16,17,'fizz']);
  });

  test('Any divisor', () => {
    expect(tasks.fizzBuzz(15,7,2)).toEqual([1,'buzz',3,'buzz',5,'buzz','fizz','buzz',9,'buzz',11,'buzz',13,'fizzbuzz',15]);
  })
});

