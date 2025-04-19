import { useState } from "react";
import ShowOtp from "./ShowOTP";

const PhoneNumberField = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOTP, setShowOTP] = useState(true);
  const [length, setLength] = useState();
  const handleChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input.length <= 10) {
      setPhoneNumber(input);
    }
  };
  const handleSumbit = (event) => {
    event.preventDefault();
    //api call which will return a length of the otp
    setLength(4);
    if (phoneNumber.length === 10) {
      setShowOTP(true);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };
  const handleOTpSubmit = (otp) => {
    console.log(otp);
  };
  return (
    <div>
     {!showOTP ? ( <form onSubmit={handleSumbit}>
        
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        
        <button type="submit">Submit</button>
      </form>
      ) : (
        <>
        <ShowOtp length={length} handleOTpSubmit={handleOTpSubmit} />
        </>
      )}
    </div>
  );
};

export default PhoneNumberField;
