import React, { useReducer, useState } from "react";

const SET_NAME = "SET_NAME";
const SET_AGE = "SET_AGE";

const reducer = (prevState, action) => {
  const { type, value } = action;
  if (type === SET_NAME) {
    return { ...prevState, myname: value };
  } else if (type === SET_AGE) {
    return { ...prevState, age: value };
  }
  return prevState;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { myname: "", age: "" });
  const { myname, age } = state;
  const onChange = (e) => {
    const { name: type, value } = e.target;
    // if (name === "myname") {
    // }

    // const action = { type, value };
    dispatch({ type, value });

    // const action = { type: SET_AGE, value: value };
    // dispatch(action);
  };
  //   const [person, setPerson] = useState({ myname: "", age: "" });
  //   const { myname, age } = person;
  //   const onChange = (e) => {
  //     const { name, value } = e.target;
  //     setPerson((pervState) => ({
  //       ...pervState,
  //       [name]: value,
  //     }));
  //   };
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");

  return (
    <div>
      myname: {myname}, age:{age}
      <br />
      <input
        type="text"
        placeholder="name"
        name="SET_NAME"
        onChange={onChange}
        // onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        name="SET_AGE"
        onChange={onChange}
        // onChange={(e) => setAge(e.target.value)}
      />
      <hr />
      {JSON.stringify(state)};
    </div>
  );
};

export default App;
