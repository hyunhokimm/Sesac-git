// 원본
// function goMart() {
//   console.log('마트에서 무엇을 살까?');
// }

// let product;
// let price;

// function pickDrink() {
//   setTimeout(() => {
//     product = '코카콜라';
//     price = 1000;
//   }, 1000);
// }

// function pay(product, price) {
//   console.log(`${product}의 가격은 ${price} 입니다.`);
// }

// goMart();
// pickDrink();
// pay();

// callback()
// function goMart() {
//   console.log('마트에서 무엇을 살까?');
// }

// let product;
// let price;

// function pickDrink(cb) {
//   setTimeout(() => {
//     product = '코카콜라';
//     price = 1000;
//     cb(product, price);
//   }, 1000);
// }

// function pay(product, price) {
//   console.log(`${product}의 가격은 ${price} 입니다.`);
// }

// goMart();
// pickDrink(pay);

// promise
function goMart() {
  console.log('마트에서 무엇을 살까?');
}

let product;
let price;

function pickDrink() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      product = '코카콜라';
      price = 1000;
      res();
    }, 2000);
  });
}

function pay(product, price) {
  console.log(`${product}의 가격은 ${price} 입니다.`);
}

goMart();
pickDrink().then(() => pay(product, price));
// pickDrink().then((res) => pay(res.product, res.price));
