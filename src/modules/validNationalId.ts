/**
 * Validates a Persian national ID using the standard checksum algorithm.
 *
 * This function checks whether the provided national ID is valid according to
 * Iranian national identification standards. It verifies the format, length,
 * and check digit using the modulo 11 algorithm. The function also rejects
 * common invalid patterns such as all-same-digit sequences.
 *
 * @param nationalId - The national ID string to validate. Must be a 10-digit string.
 * @returns `true` if the national ID is valid, `false` otherwise.
 *
 * @example
 * ```typescript
 * const isValid = validNationalId("0123456789");
 * if (isValid) {
 *   console.log("Valid national ID");
 * } else {
 *   console.log("Invalid national ID");
 * }
 * ```
 */
export function validNationalId(nationalId: string = ""): boolean {
  let code = nationalId;
  const sameNumber =
    code === "0000000000" ||
    code === "1111111111" ||
    code === "2222222222" ||
    code === "3333333333" ||
    code === "4444444444" ||
    code === "5555555555" ||
    code === "6666666666" ||
    code === "7777777777" ||
    code === "8888888888" ||
    code === "9999999999";

  const valueLength = code ? code.length : 0;
  if (valueLength === 0) {
    return false;
  }

  if (valueLength < 10 || parseInt(code, 10) === 0 || sameNumber) {
    return false;
  }

  code = ("0000" + code).substr(valueLength + 4 - 10);
  if (parseInt(code.substr(3, 6), 10) === 0) {
    return false;
  }
  const checkCode = parseInt(code.substr(9, 1), 10);
  let result = 0;
  for (let i = 0; i < 9; i++) {
    result += parseInt(code.substr(i, 1), 10) * (10 - i);
  }
  result = result % 11;
  if (
    (result < 2 && checkCode === result) ||
    (result >= 2 && checkCode === 11 - result)
  ) {
    return true;
  } else {
    return false;
  }
}

