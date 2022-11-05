/**
 * 従来の関数
 */

// function func1(str) {
//     return str;
// }

// const func1 = function(str) {
//     return str;
// }


// console.log(func1("func1"));

// アロー関数だと
// 処理が一行だけの関数なら{}とreturn省略できる
// const func2 = str => str

// // console.log(func2("func2"));

// const func3 = (num1, num2 ) => {
//     return num1 + num2;
// }

// console.log(func3(3,2));

/**
 * 分割代入
 */
// const myProfile = {
//     name: "じゃけえ",
//     age: 29,
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;

// // console.log(message1);

// // 分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;

// console.log(message2);

//分割代入はオブジェクトにも配列にも使える
// const myProfile = ['からげ', 88];

// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
// 関数の引数や分割代入のときに=を使うと初期値を設定できる！
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`) ;

// sayHello("からあげ");

/**
 * スプレッド構文
 */
//配列の展開
//どっと三つの後に配列変数名書くと、展開してくれる
// const arr1 = [1, 2];
// // console.log(...arr1);
// // const [age1, age2] = arr1;
// // console.log(`${age1}と${age2}`);

// const sumFunc = (num1, num2 ) => console.log(num1 + num2);
// sumFunc(...arr1);

// 一つにまとめる
// const arr2 = [1, 2, 3, 4, 5 ];
// const [...arr3] =arr2;
// // console.log(num1);
// // console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20 ];
// const arr5 = [30, 40 ];
// const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = [...arr4];
// // console.log(arr8);

// arr8[0] = 100;
// console.log(...arr8);
// console.log(...arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["タナカ", "山田", "じゃけえ"];
// for (let i = 0; i < nameArr.length; i++) {
//     console.log(`${i}番目は${nameArr[i]}です`);
// }

// const nameArr2 = nameArr.map((name) =>{
//     return name;
// });


// console.log(nameArr);
// console.log(nameArr2);

// nameArr.map((name,i) => console.log(`${i+1}番目は${name}`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 ===1;
// });
// console.log(newNumArr);

// const nameArr = ["タナカ", "山田", "じゃけえ"];
// const newNameArr = nameArr.map((name) => {
//     if (name === 'じゃけえ') {
//         return name
//     } else {
//         return `${name}さん`
//     }
// })

// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件? 条件がtrueの時 : 条件がfalseのとき
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

const checkSum = (num1, num2) => {
    return num1 + num2 > 100? '100を超過': '許容範囲内';
}

console.log(checkSum(50, 60));

