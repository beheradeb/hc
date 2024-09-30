import "./Body.css";
import { useState, useEffect, useRef } from "react";
import { hc_dumps_questions } from "../data/hcdumps";
import VerifyModal from "./VerifyModal";
import CustomToastMsg from "./CustomToastMsg";
const Body = () => {
  const [questions] = useState(hc_dumps_questions);
  const [currentItem, setCurrentItem] = useState(100);
  // const [currentItem, setCurrentItem] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [multiSelectedOption, setMultiSelectedOption] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  // const [explainationLink,setExplainationLink] = useState([questions[currentItem].reference]);
  const [explainationLink, setExplainationLink] = useState([
    questions[currentItem].reference,
  ]);
  const toastRef = useRef(); //for toast message
  useEffect(() => {
    setExplainationLink(questions[currentItem].reference);
  }, [currentItem, questions]);
  const selectedOptionStyle = {
    backgroundColor: "rgb(53,97,201)",
    color: "white",
    border: "0.3vh solid black",
  };
  const multiSelectedOptionStyle = {
    backgroundColor: "rgb(53,97,201)",
    color: "white",
    border: "0.3vh solid black",
  };

  const handleMultiSelectionOption = (id) => {
    const arr = [...multiSelectedOption];
    if (arr.includes(id)) {
      arr.splice(arr.indexOf(id), 1);
    } else {
      arr.push(id);
    }

    setMultiSelectedOption(arr);
  };
  return (
    <>
      <div className="Body">
        <div className="b-box-1">
          <div className="b-1">
            <h2 style={{ color: "rgb(53, 97, 201)" }}>
              Question No. {questions[currentItem].id}
            </h2>{" "}
            <p> / Out of {questions.length}</p>
          </div>
          <div className="b-2">
            {questions[currentItem].conform && showAnswer ? (
              <button
                className="verified"
                onClick={() => setShowVerifyModal(true)}
              >
                <span>Verified</span>
                {/* verified */}
              </button>
            ) : (
              ""
            )}
            <button
              className="skip"
              onClick={() => {
                if (inputValue >= 1 && inputValue <= 228) {
                  setCurrentItem(inputValue - 1);
                  setExplainationLink([questions[currentItem].reference]);
                  setInputValue("");
                  setShowAnswer(false);
                  setSelectedOption("");
                  setMultiSelectedOption([]);
                  toastRef.current.showToast(
                    `Now you are at question number ${inputValue}!`,
                    "success"
                  ); //require for toast msg
                } else {
                  toastRef.current.showToast(
                    "Enter a valid question number!",
                    `warning`
                  ); //require for toast msg
                }
              }}
            >
              Skip
            </button>
            To
            <input
              type="text"
              placeholder="Q.No."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (inputValue >= 1 && inputValue <= 228) {
                    setCurrentItem(inputValue - 1);
                    setInputValue("");
                    setShowAnswer(false);
                    setSelectedOption("");
                    setMultiSelectedOption([]);
                    setExplainationLink([questions[currentItem].reference]);
                    toastRef.current.showToast(
                      `Now you are at question number ${inputValue}!`,
                      `success`
                    ); //require for toast msg
                  } else {
                    toastRef.current.showToast(
                      "Enter a valid question number!",
                      `warning`
                    ); //require for toast msg
                  }
                }
              }}
            />
          </div>
        </div>
        <div className="b-box-2">
          {/* <h3 style={{ color: "black" }}> */}
          <h3 style={{ color: "white" }}>
            Question Type: {questions[currentItem].questionType}
          </h3>
        </div>
        <div
          className="b-box-3"
          title="If the question is not fully visible, you can scroll to see the rest of it."
        >
          <p>{questions[currentItem].question}</p>
        </div>
        <div className="b-box-4">
          {questions[currentItem].options.map((opt) => (
            <p
              title={
                showAnswer &&
                questions[currentItem].answer.some((ans) => ans.id === opt.id)
                  ? "For Explanation Click on Verified on Top Right."
                  : ""
              }
              key={opt.id}
              className={
                showAnswer &&
                questions[currentItem].answer.some((ans) => ans.id === opt.id)
                  ? "correctAnswerStyle"
                  : ""
              }
            >
              <button
                className={
                  questions[currentItem].questionType === "Single Choice"
                    ? "single-type-opt"
                    : "multi-type-opt"
                }
                style={
                  questions[currentItem].questionType === "Single Choice" &&
                  selectedOption === opt.id
                    ? selectedOptionStyle
                    : multiSelectedOption.some((msopt) => msopt === opt.id)
                    ? multiSelectedOptionStyle
                    : {}

                  // multiSelectedOption.some((msopt) => msopt === opt.id)
                  //   ? // selectedOption === opt.id
                  //     selectedOptionStyle
                  //   : {}
                }
                onClick={() => {
                  questions[currentItem].questionType === "Single Choice"
                    ? setSelectedOption(opt.id)
                    : handleMultiSelectionOption(opt.id);
                }}
                // onClick={() => setSelectedOption(opt.id)}
              >
                {opt.id}
              </button>{" "}
              {opt.option}
            </p>
          ))}
        </div>

        <div className="b-box-5">
          <button
            style={{
              backgroundColor: currentItem === 0 ? "gray" : "rgb(53, 97, 201)",
              cursor: currentItem === 0 ? "not-allowed" : "pointer",
            }}
            onClick={() => {
              if (currentItem > 0) setCurrentItem(currentItem - 1);
              setShowAnswer(false);
              setSelectedOption("");
              setMultiSelectedOption([]);
              setExplainationLink([questions[currentItem].reference]);
            }}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "rgb(53, 201, 97)", width: "12%" }}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
          <button
            style={{
              backgroundColor:
                currentItem === questions.length - 1
                  ? "gray"
                  : "rgb(53, 97, 201)",
              cursor:
                currentItem === questions.length - 1
                  ? "not-allowed"
                  : "pointer",
            }}
            onClick={() => {
              if (currentItem < questions.length - 1)
                setCurrentItem(currentItem + 1);
              setShowAnswer(false);
              setSelectedOption("");
              setMultiSelectedOption([]);
              setExplainationLink([questions[currentItem].reference]);
            }}
          >
            Next
          </button>
        </div>
      </div>
      {showVerifyModal && (
        <VerifyModal
          setShowVerifyModal={setShowVerifyModal}
          explainationLink={explainationLink}
        />
      )}
      <CustomToastMsg ref={toastRef} timeout={3000} />
    </>
  );
};

export default Body;
