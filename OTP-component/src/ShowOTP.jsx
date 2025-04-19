import React, { useEffect, useRef, useState } from "react";

const ShowOTP = ({ length = 4, handleOTpSubmit, setShowOTP, setPhoneNumber }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current[0].focus();
    }
  }, []);
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      // else{
      inputRef.current[index + 1].focus();
      // if(index < length-1 && otp[index+1]){
      //     inputRef.current[otp.indexOf("")].focus();
      // }
      // }
    }
    const combinedOpt = newOtp.join("");
    if (length === combinedOpt.length) handleOTpSubmit(combinedOpt);
  };
  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);
  };
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      if (!otp[index] && index > 0 && inputRef.current[index - 1]) {
        inputRef.current[index - 1].focus();
      }
    }
  };
  return (
    <div>
      {otp.map((item, index) => (
        <input
          className="otp-block"
          type="text"
          ref={(input) => (inputRef.current[index] = input)}
          key={index}
          value={item}
          onChange={(event) => handleChange(index, event)}
          onClick={() => handleClick(index)}
          onKeyDown={(event) => handleKeyDown(index, event)}
        />
      ))}
      <p>
        Didn't Recieve OTP: click herer to{" "}
        <span
          onClick={() => {
            setShowOTP(false);
            setPhoneNumber("");
          }}
        >
          Resend
        </span>
      </p>
    </div>
  );
};

export default ShowOTP;
