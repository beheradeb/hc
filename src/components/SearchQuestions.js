import "./SearchQuestions.css";
import { useState } from "react";
import { hc_dumps_questions } from "../data/hcdumps";

const SearchQuestions = () => {
  const [arr] = useState([...hc_dumps_questions]);
  const [newArr, setNewArr] = useState([]);
  const handleSearch = (event) => {
    let eventTargetValue = event.target.value.toLowerCase().trim();
    if (eventTargetValue === "") {
      return setNewArr([]);
    }
    setNewArr(
      arr.filter((ele) => {
        return ele.question.toLowerCase().includes(eventTargetValue);
      })
    );
  };
  return (
    <div className="SearchQuestions">
      <div className="box-1">
        <input type="text" onChange={(event) => handleSearch(event)} />
      </div>
      <div className="box-2">
        {newArr.length === 0 ? (
          <div className="no-search">Search for your record!</div>
        ) : (
          newArr.map((ele) => (
            <ul key={ele.id}>
              <li key={ele.id}>
                ({ele.id})&nbsp;{ele.question}
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchQuestions;
