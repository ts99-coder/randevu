export function isValidVkn(kno) {
  if (!kno) {
    return true;
  }
  let v1 = 0;
  let v2 = 0;
  let v3 = 0;
  let v4 = 0;
  let v5 = 0;
  let v6 = 0;
  let v7 = 0;
  let v8 = 0;
  let v9 = 0;
  let v11 = 0;
  let v22 = 0;
  let v33 = 0;
  let v44 = 0;
  let v55 = 0;
  let v66 = 0;
  let v77 = 0;
  let v88 = 0;
  let v99 = 0;
  let v_last_digit = 0;
  let toplam = 0;

  if (kno.length == 10) {
    v1 = (Number(kno.charAt(0)) + 9) % 10;
    v2 = (Number(kno.charAt(1)) + 8) % 10;
    v3 = (Number(kno.charAt(2)) + 7) % 10;
    v4 = (Number(kno.charAt(3)) + 6) % 10;
    v5 = (Number(kno.charAt(4)) + 5) % 10;
    v6 = (Number(kno.charAt(5)) + 4) % 10;
    v7 = (Number(kno.charAt(6)) + 3) % 10;
    v8 = (Number(kno.charAt(7)) + 2) % 10;
    v9 = (Number(kno.charAt(8)) + 1) % 10;
    v_last_digit = Number(kno.charAt(9));

    v11 = (v1 * 512) % 9;
    v22 = (v2 * 256) % 9;
    v33 = (v3 * 128) % 9;
    v44 = (v4 * 64) % 9;
    v55 = (v5 * 32) % 9;
    v66 = (v6 * 16) % 9;
    v77 = (v7 * 8) % 9;
    v88 = (v8 * 4) % 9;
    v99 = (v9 * 2) % 9;

    if (v1 != 0 && v11 == 0) v11 = 9;
    if (v2 != 0 && v22 == 0) v22 = 9;
    if (v3 != 0 && v33 == 0) v33 = 9;
    if (v4 != 0 && v44 == 0) v44 = 9;
    if (v5 != 0 && v55 == 0) v55 = 9;
    if (v6 != 0 && v66 == 0) v66 = 9;
    if (v7 != 0 && v77 == 0) v77 = 9;
    if (v8 != 0 && v88 == 0) v88 = 9;
    if (v9 != 0 && v99 == 0) v99 = 9;
    toplam = v11 + v22 + v33 + v44 + v55 + v66 + v77 + v88 + v99;

    if (toplam % 10 == 0) toplam = 0;
    else toplam = 10 - (toplam % 10);

    return toplam == v_last_digit;
  }
  return false;
}

export function isValidTckn(tcno) {
  if (!tcno) {
    return true;
  }
  if (!/^[1-9][0-9]{10}$/.test(tcno)) return false;

  const digits = tcno.split("").map(Number);
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];

  const digit10 = (oddSum * 7 - evenSum) % 10;
  if (digit10 !== digits[9]) return false;

  const digit11 = digits.slice(0, 10).reduce((a, b) => a + b, 0) % 10;
  return digit11 === digits[10];
}

export function isValidVknTckn(value) {
  if (!value) {
    return true;
  }
  if (value.length === 11) {
    return isValidTckn(value);
  } else if (value.length === 10) {
    return isValidVkn(value);
  }
  return false;
}

export function isValidIMEI(value) {
  if (!value) {
    return true;
  }

  if (!/^\d{15}$/.test(value)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 15; i++) {
    let digit = parseInt(value.charAt(i), 10);

    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  return sum % 10 === 0;
}

export function isValidIBAN(value) {
  if (!value) {
    return true;
  }

  var iban = value.replace(/\s+/g, "").toUpperCase();

  // Türkiye IBAN formatı: TR + 24 rakam = 26 karakter
  if (!/^TR\d{24}$/.test(iban)) {
    return false;
  }

  // İlk 4 karakteri sona al
  var rearranged = iban.slice(4) + iban.slice(0, 4);

  // Harfleri sayıya çevir (A=10 ... Z=35)
  var numericIban = "";
  for (var i = 0; i < rearranged.length; i++) {
    var char = rearranged[i];
    if (char >= "A" && char <= "Z") {
      numericIban += (char.charCodeAt(0) - 55);
    } else {
      numericIban += char;
    }
  }

  // Büyük sayı overflow olmaması için parçalı mod 97
  var remainder = 0;

  for (var j = 0; j < numericIban.length; j += 7) {
    var block = remainder + numericIban.slice(j, j + 7);
    remainder = parseInt(block, 10) % 97;
  }

  return remainder === 1;
}
