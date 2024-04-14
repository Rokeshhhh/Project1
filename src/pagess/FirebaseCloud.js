import React,{useState}from "react";
import {db} from '../firebase/firebase'
import '..//../src//pagess/FirebaseCloud.css'

function FirebaseCloud() {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    db.collection("customerData").add({
      name: customerName,
      password: customerPassword,
    });
    setCustomerName(" ");
    setCustomerPassword("");
  };
  return (
    <div className="FirebaseCloud">
      <div className="container">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          value={customerPassword}
          onChange={(e) => setCustomerPassword(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default FirebaseCloud;
