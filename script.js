"use strict";

const challenges = [
  "用 6 分鐘整理桌面，再用 7 分鐘整理一段程式碼。",
  "找出一個你不懂的概念，用自己的話寫下 67 字筆記。",
  "選一個小 bug，列出 6 個線索，再測試第 7 個想法。",
  "寫一個輸出 67 的小程式，試試兩種不同的寫法。",
  "和同學交換一個學習技巧，聽聽不同的解題思路。",
  "休息一下：離開螢幕，看看遠方，再帶著新想法回來。",
  "用 6 分鐘發想，用 7 分鐘做出第一版。"
];
let lastChallenge = challenges.length - 1;
document.querySelector("#challenge-button").addEventListener("click", () => {
  const offset = 1 + Math.floor(Math.random() * (challenges.length - 1));
  lastChallenge = (lastChallenge + offset) % challenges.length;
  document.querySelector("#challenge-text").textContent = challenges[lastChallenge];
});
