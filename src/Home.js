import React, { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    alert("I am called for Count State");
  }, [count]);
  return (
    <div>
      <h1> Data : {data} </h1>
      <h1> Count : {count} </h1>
      <button onClick={() => setData(data + 1)}> Update Data </button>
      <button onClick={() => setCount(count + 1)}> Update Count </button>
    </div>
  );
}
