import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    console.log("call the api!");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes", counter);
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword'&'counter' changes", counter);
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
