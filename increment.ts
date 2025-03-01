// // 実行方法
// // node increment.js

// function increment(num) {
//     return num + 1;
//   }
  
//   console.log(increment(999));
//   console.log(increment("999"));

//   // 型が動的に変わる

function increment(num: number) {
  //                 ^^^^^^^^型注釈
    return num + 1;
  }
   
  console.log(increment(999));

  // tscがコンパイラによるチェック
  // tsc increment.ts

  // これでコンパイラが通る

  // 勝手にJSファイルが生成される
  // increment.js

  // その前にpowershellで実行ポリシーを変更
  // Set-ExecutionPolicy RemoteSigned // 全体
  // Set-ExecutionPolicy RemoteSigned -Scope CurrentUser  // 今のユーザ

  
  // <input id="email">の文字色を赤色にするDOM操作の例
const emailInput = document.getElementById("email");
// emailInput.style.color = "red";

if (emailInput) {
  emailInput.style.color = "red";
} else {
  console.error("Element with id 'email' not found.");
}