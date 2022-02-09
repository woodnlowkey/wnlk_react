import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [keyword, setKeyword] = useState("")
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    if (keyword.length > 1) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search"/>
      <h1 className={styles.title}>React</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
