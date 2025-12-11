/**
 * Generates a valid random Persian national ID.
 *
 * The generated national ID follows the standard Iranian national identification
 * number format, which is a 10-digit number with a check digit calculated
 * based on the modulo 11 algorithm.
 *
 * @returns A string containing a valid 10-digit Persian national ID.
 *
 * @example
 * ```typescript
 * const nationalId = generateNationalId();
 * console.log(nationalId); // e.g., "0123456789"
 * ```
 */
export function generateNationalId(): string {
  let nationalId = "";
  let sumOfNumbers = 0;
  for (let i = 10; i >= 2; i--) {
    const randomNumber = Math.floor(Math.random() * 10);
    sumOfNumbers = sumOfNumbers + randomNumber * i;
    nationalId += randomNumber;
  }
  const leftOver = sumOfNumbers % 11;

  nationalId =
    leftOver < 2 ? nationalId + leftOver : nationalId + (11 - leftOver);
  return nationalId;
}

