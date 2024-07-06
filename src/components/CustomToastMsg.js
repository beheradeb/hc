import "./CustomToastMsg.css";
import { useState, forwardRef, useImperativeHandle } from "react";
const CustomToastMsg = ({ timeout }, ref) => {
  const [showToastMsg, setShowToastMsg] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("");
  useImperativeHandle(ref, () => ({
    showToast(msg, variant) {
      setShowToastMsg(true);
      setToastMsg(msg);
      setToastVariant(variant);
      setTimeout(() => {
        setShowToastMsg(false);
      }, timeout);
    },
  }));
  return (
    <div
      className={`CustomToastMsg ${
        showToastMsg ? "show-custom-toast-msg" : ""
      } ${toastVariant}`}
    >
      {toastVariant === "success" ? (
        <span>&#10003;&nbsp;</span>
      ) : (
        <span>&#x26A0;&nbsp;</span>
      )}{" "}
      {toastMsg}
    </div>
  );
};

export default forwardRef(CustomToastMsg);
