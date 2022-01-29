import { Divider } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ko";

// React.Component

class App1 extends React.Component {
  state = {
    value1: 0,
    value2: 0,
  };

  onClick = () => {
    this.setState({ value1: 10 });
  };

  render() {
    const { value1 } = this.state;
    return (
      <div>
        Hello App1
        <hr />
        {value1}
        <button onClick={this.onClick}></button>
      </div>
    );
  }
}

function PostDetailComponent({ post }) {
  const { title, content } = post;
  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
}

function PostDetail({ postId }) {
  const [post, setPost] = useState();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    console.log("changed postId :", postId);
    setPost({ title: "포스제목", content: `포스팅 내용 ..." ${postId}` });
  }, [postId]);
  return (
    <div>
      <h1>Post #{postId}</h1>
      {/* {JSON.stringify(post)} */}
      {!post && "로딩 중 ...."}
      {post && <PostDetailComponent post={post} />}
    </div>
  );
}

function Clock() {
  const [date, setDate] = useState(new Date());
  // const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const nowTime = moment().format("HH:mm:ss");

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // return <div>현재시각은 {date.toISOString().slice(11, 19)}입니다.</div>;
  return <div>현재시각은 {nowTime}입니다.</div>;
}

function App2() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value, setValue] = useState({ value1: 0, value2: 0 });
  const [postId, setPostId] = useState(1);

  useEffect(() => {});
  useEffect(() => {
    console.log("mount");
  }, []);
  useEffect(() => {
    console.log("changed value", value);
  }, [value]);

  // const onClick = () => {
  //   setValue((prevState) => ({ ...prevState, value1: 10 }));
  // };

  const onClick = useCallback(() => {
    setValue((prevState) => ({ ...prevState, value1: 10 }));
  }, []);

  return (
    <div>
      <Clock />
      Hello App2
      <hr />
      {JSON.stringify(value)}
      {value1}, {value.value1}
      <button onClick={onClick}>click</button>
      <hr />
      <button onClick={() => setPostId(100)}>100번글</button>
      <PostDetail postId={postId} />
    </div>
  );
}

export default App2;
