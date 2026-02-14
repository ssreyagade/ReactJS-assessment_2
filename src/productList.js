import phone1 from "./assets/iphone.webp";
import phone2 from "./assets/sam.webp";
import phone3 from "./assets/one.jpg";
import phone4 from "./assets/Redmi.webp";
import phone5 from "./assets/Pixel.webp";
import phone6 from "./assets/Realme.jpg";
import phone7 from "./assets/Vivo.png";
import phone8 from "./assets/oppo.jpg";
import phone9 from "./assets/Pixel.webp";
import phone10 from "./assets/sam.webp";
// sho
import shoe1 from "./assets/s1.jpg";
import shoe2 from "./assets/s2.jpg";
import shoe3 from "./assets/s3.jpg";
import shoe4 from "./assets/s4.jpg";
import shoe5 from "./assets/s5.jpg";
import shoe6 from "./assets/s6.jpg";
import shoe7 from "./assets/s7.jpg";
import shoe8 from "./assets/s8.jpg";
import shoe9 from "./assets/s9.jpg";
// w
import watch1 from "./assets/w1.jpg";
import watch2 from "./assets/w2.jpg";
import watch3 from "./assets/w3.jpg";
import watch4 from "./assets/w4.webp";
import watch5 from "./assets/w5.webp";
import watch6 from "./assets/w6.webp";
import watch7 from "./assets/w7.jpg";
import watch8 from "./assets/w2.jpg";
import watch9 from "./assets/w9.jpg";
//c
import c1 from "./assets/ts.jpg";
import c2 from "./assets/j.jpg";
import c3 from "./assets/sh.jpg";
import c4 from "./assets/jo.jpg";
import c5 from "./assets/ku.jpg";
import c6 from "./assets/jak.jpg";
import c7 from "./assets/tracp.jpg";
import c8 from "./assets/sar.jpg";
import c9 from "./assets/bla.avif";
const allproducts = [
  // ---------------- PHONES (10) ----------------
  {
    id: 1,
    productImage: phone1,
    productName: "iPhone 14",
    category: "Phones",
    brand: "Apple",
    price: 80000,
  },
  {
    id: 2,
    productImage: phone2,
    productName: "Galaxy S23",
    category: "Phones",
    brand: "Samsung",
    price: 75000,
  },
  {
    id: 3,
    productImage: phone3,
    productName: "OnePlus 11",
    category: "Phones",
    brand: "OnePlus",
    price: 60000,
  },
  {
    id: 4,
    productImage: phone4,
    productName: "Redmi Note 12",
    category: "Phones",
    brand: "Xiaomi",
    price: 18000,
  },
  {
    id: 5,
    productImage: phone5,
    productName: "Pixel 7",
    category: "Phones",
    brand: "Google",
    price: 65000,
  },
  {
    id: 6,
    productImage: phone6,
    productName: "Realme GT",
    category: "Phones",
    brand: "Realme",
    price: 25000,
  },
  {
    id: 7,
    productImage: phone7,
    productName: "Vivo V27",
    category: "Phones",
    brand: "Vivo",
    price: 30000,
  },
  {
    id: 8,
    productImage: phone8,
    productName: "Oppo Reno 8",
    category: "Phones",
    brand: "Oppo",
    price: 28000,
  },
  {
    id: 9,
    productImage: phone9,
    productName: "Motorola Edge 40",
    category: "Phones",
    brand: "Motorola",
    price: 32000,
  },
  {
    id: 10,
    productImage: phone10,
    productName: "Nothing Phone 2",
    category: "Phones",
    brand: "Nothing",
    price: 42000,
  },

  // ---------------- SHOES (9) ----------------
  {
    id: 11,
    productImage: shoe1,
    productName: "Air Max",
    category: "Shoes",
    brand: "Nike",
    price: 7000,
  },
  {
    id: 12,
    productImage: shoe2,
    productName: "Ultraboost",
    category: "Shoes",
    brand: "Adidas",
    price: 9000,
  },
  {
    id: 13,
    productImage: shoe3,
    productName: "RS-X",
    category: "Shoes",
    brand: "Puma",
    price: 6000,
  },
  {
    id: 14,
    productImage: shoe4,
    productName: "Classic Leather",
    category: "Shoes",
    brand: "Reebok",
    price: 5000,
  },
  {
    id: 15,
    productImage: shoe6,
    productName: "Chuck Taylor",
    category: "Shoes",
    brand: "Converse",
    price: 4500,
  },
  {
    id: 16,
    productImage: shoe7,
    productName: "New Balance 574",
    category: "Shoes",
    brand: "New Balance",
    price: 8000,
  },
  {
    id: 17,
    productImage: shoe8,
    productName: "Skechers Go Walk",
    category: "Shoes",
    brand: "Skechers",
    price: 4000,
  },
  {
    id: 18,
    productImage: shoe9,
    productName: "Campus Runner",
    category: "Shoes",
    brand: "Campus",
    price: 2500,
  },
  {
    id: 19,
    productImage: shoe1,
    productName: "Woodland Trek",
    category: "Shoes",
    brand: "Woodland",
    price: 5500,
  },

  // ---------------- WATCHES (9) ----------------
  {
    id: 20,
    productImage: watch1,
    productName: "Fossil Gen 6",
    category: "Watches",
    brand: "Fossil",
    price: 15000,
  },
  {
    id: 21,
    productImage: watch2,
    productName: "Titan Edge",
    category: "Watches",
    brand: "Titan",
    price: 10000,
  },
  {
    id: 22,
    productImage: watch3,
    productName: "Casio G-Shock",
    category: "Watches",
    brand: "Casio",
    price: 8000,
  },
  {
    id: 23,
    productImage: watch4,
    productName: "Apple Watch SE",
    category: "Watches",
    brand: "Apple",
    price: 30000,
  },
  {
    id: 24,
    productImage: watch5,
    productName: "Samsung Galaxy Watch",
    category: "Watches",
    brand: "Samsung",
    price: 22000,
  },
  {
    id: 25,
    productImage: watch6,
    productName: "Timex Expedition",
    category: "Watches",
    brand: "Timex",
    price: 6000,
  },
  {
    id: 26,
    productImage: watch7,
    productName: "Noise Smartwatch",
    category: "Watches",
    brand: "Noise",
    price: 5000,
  },
  {
    id: 27,
    productImage: watch8,
    productName: "Boat Storm",
    category: "Watches",
    brand: "Boat",
    price: 3500,
  },
  {
    id: 28,
    productImage: watch4,
    productName: "Rolex Submariner",
    category: "Watches",
    brand: "Rolex",
    price: 500000,
  },

  // ---------------- CLOTHES (9) ----------------
  {
    id: 29,
    productImage: c1,
    productName: "Cotton T-Shirt",
    category: "Clothes",
    brand: "H&M",
    price: 1200,
  },
  {
    id: 30,
    productImage: c2,
    productName: "Slim Fit Jeans",
    category: "Clothes",
    brand: "Levi's",
    price: 2500,
  },
  {
    id: 31,
    productImage: c3,
    productName: "Formal Shirt",
    category: "Clothes",
    brand: "Peter England",
    price: 1800,
  },
  {
    id: 32,
    productImage: c4,
    productName: "Hoodie",
    category: "Clothes",
    brand: "Zara",
    price: 2200,
  },
  {
    id: 33,
    productImage: c5,
    productName: "Kurti",
    category: "Clothes",
    brand: "Biba",
    price: 1500,
  },
  {
    id: 34,
    productImage: c6,
    productName: "Jacket",
    category: "Clothes",
    brand: "Roadster",
    price: 3000,
  },
  {
    id: 35,
    productImage: c7,
    productName: "Track Pants",
    category: "Clothes",
    brand: "HRX",
    price: 1400,
  },
  {
    id: 36,
    productImage: c8,
    productName: "Saree",
    category: "Clothes",
    brand: "Manyavar",
    price: 3500,
  },
  {
    id: 37,
    productImage: c9,
    productName: "Blazer",
    category: "Clothes",
    brand: "Van Heusen",
    price: 4000,
  },
];

const phones = [
  // ---------------- PHONES (10) ----------------
  {
    id: 1,
    productImage: phone1,
    productName: "iPhone 14",
    category: "Phones",
    brand: "Apple",
    price: 80000,
  },
  {
    id: 2,
    productImage: phone2,
    productName: "Galaxy S23",
    category: "Phones",
    brand: "Samsung",
    price: 75000,
  },
  {
    id: 3,
    productImage: phone3,
    productName: "OnePlus 11",
    category: "Phones",
    brand: "OnePlus",
    price: 60000,
  },
  {
    id: 4,
    productImage: phone4,
    productName: "Redmi Note 12",
    category: "Phones",
    brand: "Xiaomi",
    price: 18000,
  },
  {
    id: 5,
    productImage: phone5,
    productName: "Pixel 7",
    category: "Phones",
    brand: "Google",
    price: 65000,
  },
  {
    id: 6,
    productImage: phone6,
    productName: "Realme GT",
    category: "Phones",
    brand: "Realme",
    price: 25000,
  },
  {
    id: 7,
    productImage: phone7,
    productName: "Vivo V27",
    category: "Phones",
    brand: "Vivo",
    price: 30000,
  },
  {
    id: 8,
    productImage: phone8,
    productName: "Oppo Reno 8",
    category: "Phones",
    brand: "Oppo",
    price: 28000,
  },
  {
    id: 9,
    productImage: phone9,
    productName: "Motorola Edge 40",
    category: "Phones",
    brand: "Motorola",
    price: 32000,
  },
  {
    id: 10,
    productImage: phone10,
    productName: "Nothing Phone 2",
    category: "Phones",
    brand: "Nothing",
    price: 42000,
  },
];

const shoes = [
  {
    id: 11,
    productImage: shoe1,
    productName: "Air Max",
    category: "Shoes",
    brand: "Nike",
    price: 7000,
  },
  {
    id: 12,
    productImage: shoe2,
    productName: "Ultraboost",
    category: "Shoes",
    brand: "Adidas",
    price: 9000,
  },
  {
    id: 13,
    productImage: shoe3,
    productName: "RS-X",
    category: "Shoes",
    brand: "Puma",
    price: 6000,
  },
  {
    id: 14,
    productImage: shoe4,
    productName: "Classic Leather",
    category: "Shoes",
    brand: "Reebok",
    price: 5000,
  },
  {
    id: 15,
    productImage: shoe6,
    productName: "Chuck Taylor",
    category: "Shoes",
    brand: "Converse",
    price: 4500,
  },
  {
    id: 16,
    productImage: shoe7,
    productName: "New Balance 574",
    category: "Shoes",
    brand: "New Balance",
    price: 8000,
  },
  {
    id: 17,
    productImage: shoe8,
    productName: "Skechers Go Walk",
    category: "Shoes",
    brand: "Skechers",
    price: 4000,
  },
  {
    id: 18,
    productImage: shoe9,
    productName: "Campus Runner",
    category: "Shoes",
    brand: "Campus",
    price: 2500,
  },
  {
    id: 19,
    productImage: shoe1,
    productName: "Woodland Trek",
    category: "Shoes",
    brand: "Woodland",
    price: 5500,
  },
];

const watches = [
  {
    id: 20,
    productImage: watch1,
    productName: "Fossil Gen 6",
    category: "Watches",
    brand: "Fossil",
    price: 15000,
  },
  {
    id: 21,
    productImage: watch2,
    productName: "Titan Edge",
    category: "Watches",
    brand: "Titan",
    price: 10000,
  },
  {
    id: 22,
    productImage: watch3,
    productName: "Casio G-Shock",
    category: "Watches",
    brand: "Casio",
    price: 8000,
  },
  {
    id: 23,
    productImage: watch4,
    productName: "Apple Watch SE",
    category: "Watches",
    brand: "Apple",
    price: 30000,
  },
  {
    id: 24,
    productImage: watch5,
    productName: "Samsung Galaxy Watch",
    category: "Watches",
    brand: "Samsung",
    price: 22000,
  },
  {
    id: 25,
    productImage: watch6,
    productName: "Timex Expedition",
    category: "Watches",
    brand: "Timex",
    price: 6000,
  },
  {
    id: 26,
    productImage: watch7,
    productName: "Noise Smartwatch",
    category: "Watches",
    brand: "Noise",
    price: 5000,
  },
  {
    id: 27,
    productImage: watch8,
    productName: "Boat Storm",
    category: "Watches",
    brand: "Boat",
    price: 3500,
  },
  {
    id: 28,
    productImage: watch4,
    productName: "Rolex Submariner",
    category: "Watches",
    brand: "Rolex",
    price: 500000,
  },
];
const clothes = [
  {
    id: 29,
    productImage: c1,
    productName: "Cotton T-Shirt",
    category: "Clothes",
    brand: "H&M",
    price: 1200,
  },
  {
    id: 30,
    productImage: c2,
    productName: "Slim Fit Jeans",
    category: "Clothes",
    brand: "Levi's",
    price: 2500,
  },
  {
    id: 31,
    productImage: c3,
    productName: "Formal Shirt",
    category: "Clothes",
    brand: "Peter England",
    price: 1800,
  },
  {
    id: 32,
    productImage: c4,
    productName: "Hoodie",
    category: "Clothes",
    brand: "Zara",
    price: 2200,
  },
  {
    id: 33,
    productImage: c5,
    productName: "Kurti",
    category: "Clothes",
    brand: "Biba",
    price: 1500,
  },
  {
    id: 34,
    productImage: c6,
    productName: "Jacket",
    category: "Clothes",
    brand: "Roadster",
    price: 3000,
  },
  {
    id: 35,
    productImage: c7,
    productName: "Track Pants",
    category: "Clothes",
    brand: "HRX",
    price: 1400,
  },
  {
    id: 36,
    productImage: c8,
    productName: "Saree",
    category: "Clothes",
    brand: "Manyavar",
    price: 3500,
  },
  {
    id: 37,
    productImage: c9,
    productName: "Blazer",
    category: "Clothes",
    brand: "Van Heusen",
    price: 4000,
  },
];

export { allproducts, phones, shoes, watches, clothes };
