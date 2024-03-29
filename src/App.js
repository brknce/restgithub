import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);

  const inputChange = (e) => {
    setKeyword(e.target.value);
  };

  const fetchData = () => {
    const url = `https://api.github.com/search/repositories?q=${keyword}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.items);
      });
  };

  const tableRows = data.map((item, index) => (
    <tr key={index}>
      <td>{item.full_name}</td>{" "}
      <td>
        <a href={item.html_url}>{item.html_url}</a>
      </td>
    </tr>
  ));

  return (
    <div className="App">
      <input type="text" onChange={inputChange}></input>
      <button onClick={fetchData}>fetch</button>
      <table>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default App;
