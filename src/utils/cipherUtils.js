const invalidParams = (input, key) =>
  typeof input !== "string" || typeof key !== "number" || key < 0 || key > 26;

export const invalidParamsError = new Error(
  "cipher.utils invalid params, " +
    "encrypt(input:String, key:Number[0-26]), " +
    "decrypt(input:String, key:Number[0-26])"
);

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const calculateCharacterShift = (char, key, reverseDirection) => {
  const charIndex = alphabet.indexOf(char);

  if (key === 0 || key === 26 || charIndex === -1) return char;

  if (charIndex + key >= 26 && !reverseDirection) {
    const remainder = charIndex + key - 26;
    return alphabet.substr(remainder, 1);
  }

  const newCharIndex = reverseDirection ? charIndex - key : charIndex + key;
  const newChar = alphabet.substr(newCharIndex, 1);
  return newChar;
};

export const encrypt = (input, key) => {
  if (invalidParams(input, key)) throw invalidParamsError;
  return [...input].map((c) => calculateCharacterShift(c, key)).join("");
};

export const decrypt = (input, key) => {
  if (invalidParams(input, key)) throw invalidParamsError;
  return [...input].map((c) => calculateCharacterShift(c, key, true)).join("");
};
