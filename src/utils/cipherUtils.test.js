import { encrypt, decrypt, invalidParamsError } from "./cipherUtils";

/**
 *
 * encrypt(59, 'foo') // error
 * encrypt('X', 0)    // X
 * encrypt('X', 26)   // X
 * encrypt('X', 27)   // error
 * encrypt('X', -1)   // error
 * encrypt('A', 5)    // F
 * encrypt('T', 16)   // J
 * encrypt('ABCDE', 5)  // FGHIJ
 * encrypt('ABCDE', 25)  // ZABCD
 * encrypt('VWXYZ', 18) // NOPQR
 * encrypt('A B C. D E **', 5)  // F G H. I J **
 *
 * decrypt(32, 'bar') // error
 * decrypt('X', 0)    // X
 * decrypt('X', 26)   // X
 * decrypt('X', 27)   // error
 * decrypt('X', -1)   // error
 * decrypt('P', 7)    // I
 * decrypt('K', 24)   // M
 * decrypt('KLMNO', 8)  // CDEFG
 * decrypt('QRSTUVWX', 19)    // XYZABCDE
 * decrypt('M 1 PP A %', 19)  // J 1 MM X %
 *
 */

describe("cipherUtils", () => {
  describe("encrypt", () => {
    test(`given encrypt(59, 'foo'): should return 'new Error'`, () => {
      expect(() => {
        encrypt(59, "foo");
      }).toThrow(invalidParamsError);
    });

    test(`given encrypt('X', 0): should return "X"`, () => {
      const input = encrypt("X", 0);
      const expected = "X";
      expect(input).toEqual(expected);
    });

    test(`given encrypt('X', 26): should: return 'X'`, () => {
      const input = encrypt("X", 26);
      const expected = "X";
      expect(input).toEqual(expected);
    });

    test(`given encrypt('X', 27): should return 'new Error'`, () => {
      expect(() => {
        encrypt("X", 27);
      }).toThrow(invalidParamsError);
    });

    test(`given encrypt('X', -1): should return 'new Error'`, () => {
      expect(() => {
        encrypt("X", -1);
      }).toThrow(invalidParamsError);
    });

    test(`given encrypt('A', 5): should: return 'F'`, () => {
      const input = encrypt("A", 5);
      const expected = "F";
      expect(input).toEqual(expected);
    });

    test(`given encrypt('T', 16): should: return 'J'`, () => {
      const input = encrypt("T", 16);
      const expected = "J";
      expect(input).toEqual(expected);
    });

    test(`given encrypt('ABCDE', 5): should: return 'FGHIJ'`, () => {
      const input = encrypt("ABCDE", 5);
      const expected = "FGHIJ";
      expect(input).toEqual(expected);
    });

    test(`given encrypt('ABCDE', 25): should: return 'ZABCD'`, () => {
      const input = encrypt("ABCDE", 25);
      const expected = "ZABCD";
      expect(input).toEqual(expected);
    });

    test(`given encrypt('VWXYZ', 18): should: return 'NOPQR'`, () => {
      const input = encrypt("VWXYZ", 18);
      const expected = "NOPQR";
      expect(input).toEqual(expected);
    });

    test(`given encrypt('A B C. D E **', 5): should: return 'F G H. I J **'`, () => {
      const input = encrypt("A B C. D E **", 5);
      const expected = "F G H. I J **";
      expect(input).toEqual(expected);
    });
  });

  describe("decrypt", () => {
    test(`given decrypt(32, 'bar'): should return 'new Error'`, () => {
      expect(() => {
        decrypt(32, "bar");
      }).toThrow(invalidParamsError);
    });

    test(`given decrypt('X', 0): should: return 'X'`, () => {
      const input = decrypt("X", 0);
      const expected = "X";
      expect(input).toEqual(expected);
    });

    test(`given decrypt('X', 26): should: return 'X'`, () => {
      const input = decrypt("X", 26);
      const expected = "X";
      expect(input).toEqual(expected);
    });

    test(`given decrypt('X', 27): should return 'new Error'`, () => {
      expect(() => {
        decrypt("X", 27);
      }).toThrow(invalidParamsError);
    });

    test(`given decrypt('X', -1): should return 'new Error'`, () => {
      expect(() => {
        decrypt("X", -1);
      }).toThrow(invalidParamsError);
    });

    test(`given decrypt('P', 7): should: return 'I'`, () => {
      const input = decrypt("P", 7);
      const expected = "I";
      expect(input).toEqual(expected);
    });

    test(`given decrypt('K', 24): should: return 'M'`, () => {
      const input = decrypt("K", 24);
      const expected = "M";
      expect(input).toEqual(expected);
    });

    test(`given decrypt('KLMNO', 8): should: return 'CDEFG'`, () => {
      const input = decrypt("KLMNO", 8);
      const expected = "CDEFG";
      expect(input).toEqual(expected);
    });

    test(`given decrypt('QRSTUVWX', 19): should: return 'XYZABCDE'`, () => {
      const input = decrypt("QRSTUVWX", 19);
      const expected = "XYZABCDE";
      expect(input).toEqual(expected);
    });

    test(`given decrypt('M 1 PP A %', 3): should: return 'J 1 MM X %'`, () => {
      const input = decrypt("M 1 PP A %", 3);
      const expected = "J 1 MM X %";
      expect(input).toEqual(expected);
    });
  });
});
