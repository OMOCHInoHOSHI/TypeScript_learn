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

  // その前にpowershellで実行ポリシーを変更
  // Set-ExecutionPolicy RemoteSigned // 全体
  // Set-ExecutionPolicy RemoteSigned -Scope CurrentUser  // 今のユーザ