import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

//isPhoneNumber tests
test('valid phone - (123) 456-7890', () => expect(isPhoneNumber('(123) 456-7890')).toBe(true));
test('valid phone - 123-456-7890', () => expect(isPhoneNumber('123-456-7890')).toBe(true));
test('invalid phone - wrong format', () => expect(isPhoneNumber('1234567890')).toBe(false));
test('invalid phone - letters in number', () => expect(isPhoneNumber('123-abc-7890')).toBe(false));

//isEmail tests
test('valid email - test@example.com', () => expect(isEmail('test@example.com')).toBe(true));
test('valid email - user123@site.co', () => expect(isEmail('user123@site.co')).toBe(true));
test('invalid email - missing @', () => expect(isEmail('user123site.com')).toBe(false));
test('invalid email - missing domain', () => expect(isEmail('user@')).toBe(false));

//isStrongPassword tests
test('valid password - Hello123', () => expect(isStrongPassword('Hello123')).toBe(true));
test('valid password - my_pass_1', () => expect(isStrongPassword('my_pass_1')).toBe(true));
test('invalid password - too short', () => expect(isStrongPassword('abc')).toBe(false));
test('invalid password - starts with number', () => expect(isStrongPassword('1abcde')).toBe(false));

//isDate tests
test('valid date - 12/31/2020', () => expect(isDate('12/31/2020')).toBe(true));
test('valid date - 01/01/2000', () => expect(isDate('01/01/2000')).toBe(true));
test('invalid date - wrong format', () => expect(isDate('2020-12-31')).toBe(false));
test('invalid date - missing day', () => expect(isDate('12/2020')).toBe(false));

//isHexColor tests
test('valid hex - #abc', () => expect(isHexColor('#abc')).toBe(true));
test('valid hex - #123abc', () => expect(isHexColor('#123abc')).toBe(true));
test('invalid hex - too short', () => expect(isHexColor('#1')).toBe(false));
test('invalid hex - invalid chars', () => expect(isHexColor('#ggg999')).toBe(false));
