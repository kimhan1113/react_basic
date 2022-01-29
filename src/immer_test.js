const { produce } = require("immer");

const fruits = ["오렌지", "사과", "레몬", "바나나"];

const newFruits = produce(fruits, (draft) => {
  draft.splice(1, 3, "딸기");
});

// console.log(newFruits);

const baseState = [
  {
    todo: "Learn ES6",
    done: true,
  },
  {
    todo: "Try immer",
    done: false,
  },
];

const newbaseState = produce(baseState, (draft) => {
  draft.splice(
    1,
    1,
    { todo: "Try immer", done: true },
    { todo: "Tweet about it" },
  );
});

const newState = [
  ...baseState.map((tweet, index) =>
    index === 1 ? { ...tweet, done: true } : tweet,
  ),
  { todo: "Tweet about it" },
];

const newState2 = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ todo: "TWEET ABOUT IT" });
  // {};
});

console.log(newState2);
