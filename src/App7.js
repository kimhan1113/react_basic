import React, { createContext, useContext } from "react";

const MessageContext = createContext();

const App = () => (
  <MessageContext.Provider value="Provide Values">
    <Level2Wrapper />
  </MessageContext.Provider>
);

// const Level1 = ({ message }) => <Level2 message={message} />;

// const Level2 = ({ message }) => <Level3 message={message} />;

// const Level2Wrapper = () => (
//   <div>
//     <MessageContext.Consumer>
//       {(message) => <Level2 message={message} />}
//     </MessageContext.Consumer>
//     {/* Level3 :{message} */}
//   </div>
// );

const Level2Wrapper = () => {
  const message = useContext(MessageContext);
  return (
    <div>
      <Level2 message={message} />
    </div>
  );
};

const Level2 = ({ message }) => <div>Level2 : {message}</div>;

export default App;
