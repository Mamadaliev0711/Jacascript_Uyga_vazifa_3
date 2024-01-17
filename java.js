
// 1 Masala
let son1 = +prompt("Birinchi sonni kiriting:");
let son2 = +prompt("Ikkinchi sonni kiriting:");
let son3 = +prompt("Uchinchi sonni kiriting:");

let sonlar = [son1, son2, son3].map(function (son) {
  return parseFloat(son);
});

let kopaytma = sonlar.reduce(function (total, son) {
  return total * son;
}, 1);

console.log("3 ga karrali sonlarning kopaytmasi:", kopaytma);


//  2 Masala
let son = prompt("3 xonali son kiriting:");

let birliklar = son % 10;
let unliklar = Math.floor((son % 100) / 10);
let yuzliklar = Math.floor(son / 100);

let yigindi = birliklar + unliklar + yuzliklar;

console.log("Raqamlar yig'indisi:", yigindi);

if (yigindi % 2 === 0) {
  console.log("Yig'indi juft son");
} else {
  console.log("Yig'indi toq son");
}


// 3 Masala
let sonUchXona = +prompt("3 xonali son kiriting:");

let birliklar_1 = son % 10;
let unliklar_2 = Math.floor((son % 100) / 10);
let yuzliklar_3 = Math.floor(son / 100);

let res_1 = birliklar_1 % 2 === 1 ? birliklar_1 : 0;
let res_2 = unliklar_2 % 2 === 1 ? unliklar_2 : 0;
let res_3 = yuzliklar_3 % 2 === 1 ? yuzliklar_3 : 0;

let toqSonlarKopaytmasi = res_1 * res_2 * res_3;
console.log("Toq sonlarning kopaytmasi:", toqSonlarKopaytmasi);


// 4 Masala
let sonBir = +prompt("Birinchi sonni kiriting:");
let sonIkki = +prompt("Ikkinchi sonni kiriting:");
let sonUch = +prompt("Uchunchi sonni kiriting:");

sonBir = Number(sonBir);
sonIkki = Number(sonIkki);
sonUch = Number(sonUch);

// 5 ga karrali sonlarni topish
let karraliSon5 = 0;
if (sonBir % 5 === 0) {
  karraliSon5 += sonBir;
}
if (sonIkki % 5 === 0) {
  karraliSon5 += sonIkki;
}
if (sonUch % 5 === 0) {
  karraliSon5 += sonUch;
}

// 7 ga karrali sonlarni topish
let karraliSon7 = 0;
if (sonBir % 7 === 0) {
  karraliSon7 += sonBir;
}
if (sonIkki % 7 === 0) {
  karraliSon7 += sonIkki;
}
if (sonUch % 7 === 0) {
  karraliSon7 += sonUch;
}

console.log("5 ga karrali sonlar:", karraliSon5);
console.log("7 ga karrali sonlar:", karraliSon7);


// 5 Masala
let harf = prompt("Harf kiriting:");

harf = harf.toUpperCase();
if (
  harf === "A" ||
  harf === "E" ||
  harf === "I" ||
  harf === "O" ||
  harf === "U"
) {
  console.log("Bu harf unli ");
} else {
  console.log("Bu harf undosh ");
}


// 6 Masala
let sonA_1 = parseFloat(prompt("Birinchi sonni kiriting:"));
let amal = prompt("Amalni kiriting (+, -, *, /):");
let sonB_2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));

let natija;

if (isNaN(sonA_1) || isNaN(sonB_2)) {
  console.log("Noto'g'ri son kiritdingiz!");
} else {
  switch (amal) {
    case "+":
      natija = sonA_1 + sonB_2;
      break;
    case "-":
      natija = sonA_1 - sonB_2;
      break;
    case "*":
      natija = sonA_1 * sonB_2;
      break;
    case "/":
      if (sonB_2 !== 0) {
        natija = sonA_1 / sonB_2;
      } else {
        console.log("Nolga bo'lish mumkin emas!");
      }
      break;
    default:
      console.log("Noto'g'ri amal kiritdingiz!");
  }

  if (natija !== undefined) {
    console.log("Natija: " + natija);
  }
}


// 7 Masala
let a = parseFloat(prompt("a ni kiriting:"));
let b = parseFloat(prompt("b ni kiriting:"));
let c = parseFloat(prompt("c ni kiriting:"));

if (
  !isNaN(a) &&
  !isNaN(b) &&
  !isNaN(c) &&
  a > 0 &&
  b > 0 &&
  c > 0 &&
  a + b > c &&
  a + c > b &&
  b + c > a
) {
  console.log("Uchburchak yasash mumkin");
} else {
  console.log("Uchburchak yasash mumkin emas");
}


// 8 Masala
let sonP = prompt("3 xonali sonni kiriting:");

if (sonP.length === 3) {
  let birinchiRaqam = sonP[0];
  let ikkinchiRaqam = sonP[1];
  let uchinchiRaqam = sonP[2];

  if (birinchiRaqam === uchinchiRaqam) {
    console.log(sonP + " - Palindrom son");
  } else {
    console.log(sonP + " - Palindrom emas");
  }
} else {
  console.log("Noto'g'ri son kiritildi");
}
