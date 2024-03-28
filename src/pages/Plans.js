import React, { useState } from "react";
import { GoCheck, GoX } from "react-icons/go";
import axios from "axios";
import Modal from "../components/Modal";



const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const Cards = () => {
  const [isPaymentSuccessModalOpen, setIsPaymentSuccessModalOpen] = useState(false);
  const [subscriptionName, setSubscriptionName] = useState(""); 
  const handleButtonClick = async(amount,subscriptionName) => {
   
  console.log("Selected Subscription ID:", amount);
  console.log("Selected Subscription Item Name:", subscriptionName);
  if(amount!=0){
  const response= await axios.post('http://localhost:8080/api/v1/subscribe/createorder', { amount: amount ,item_name: 'Test User', item_description: subscriptionName ,username:'Test User', emailid: 'abc5@test.com'});
  
    console.log(response.data);
    console.log(response.data);
    if (response.data.success === true || response.data.msg === "Order Created") {
      console.log("Order created successfully");
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      

      if (res) {
        alert("Razorpay SDK loaded");
      const razorpayOptions = {
        "key": response.data.key_id,
        "amount": response.data.amount,
        "currency": "INR",
        "name": response.data.product_name,
        "description": response.data.description,
        "image": "https://dummyimage.com/600x400/000/fff",
        "order_id": response.data.order_id,
        "handler": function (response) {
            console.log("Payment Succeeded");
            console.log(response.razorpay_payment_id);
            console.log(response.razorpay_order_id);
            console.log(response.razorpay_signature);
            // You may perform additional actions after payment success

            setIsPaymentSuccessModalOpen(true);
        },
        "prefill": {
            "contact": "8777872871",
            "name": response.data.name,
            "email": response.data.email
        },
        "notes": {
            "description": response.data.description
        },
        "theme": {
            "color": "#2300a3"
        }
    };
    //<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    console.log("Razorpay Options:", razorpayOptions);

    const razorpayObject = new window.Razorpay(razorpayOptions);
    razorpayObject.on('payment.failed', function (response) {
        alert("Payment Failed");
    });
    razorpayObject.open();
  
    }
  }
}
else{
  alert("You are subscribed to free plan")
}

    setSubscriptionName(subscriptionName);
    // setIsPaymentSuccessModalOpen(true);
  
  
};


  

  return (
    <div style={{ backgroundColor: "#131720", padding: "30px 0", minHeight: "100vh", textAlign: "center" }}>
  <h2 className="text-white text-4xl font-semibold">
    Select Your Plan
  </h2>
      {/* <p className="text-white my-2 text-lg ml-20 ">
        {" "}
        No hidden fees, equipment rentals, or installation appointments.
      </p> */}
<div className="flex justify-evenly space-x-4 mx-10px bg-[#131720] my-5">
  <div style={{ marginTop: '25px' }}> {/* Increase marginTop to shift the card further down */}
    <div className="bg-slate-800 text-white p-4 rounded-lg w-[350px] h-[340px] transition-colors duration-300 ease-in-out hover:bg-blue-500 justify-evenly my-4">
      <div className="ml-[10px]">
        <h2 className="text-2xl my-2 font-semibold">FREE</h2>
        <hr className="h-px my-5 bg-slate-700 border-0" />
        <p className="flex flex-row my-2 ">
          <GoCheck className="mr-2 mt-1" color="green" /> AI Powered Search
        </p>
        <p className="flex flex-row my-2">
          <GoCheck className="mr-2 mt-1" color="green" /> Adaptive Streaming upto 480p
        </p>
        <p className="flex flex-row my-2">
          <GoX className="mr-2 mt-1" color="red" /> Premium Movies
        </p>

        <hr className="h-px my-5 bg-slate-700 border-0" />
        <div className="flex flex-row items-center justify-center"> {/* Center align price and month */}
          <h2 className="text-4xl font-bold">&#8377;0</h2>
          <p className="text-white mt-4 ml-2">/month</p> {/* Add ml-2 to create space */}
        </div>

        <button onClick={() => handleButtonClick(0, "FREE")}
          className="w-3/4 h-[50px] bg-black text-white p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800 ml-[2px] mt-2"> {/* Adjust mt-4 for margin-top */}
          SELECT PLAN
        </button>
      </div>
    </div>
  </div>





        <div className="bg-slate-800 text-white p-4 rounded-lg w-[400px] transition-colors duration-300 ease-in-out hover:bg-blue-500 my-4">
          <div className="ml-[10px]">
            <h2 className="text-2xl my-2 font-semibold">
              GOLD
            </h2>
            <hr class="h-px my-5 bg-slate-700 border-0"></hr>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              AI Powered Search
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Adaptive Streaming upto 1080p
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Premium Movies
            </p>
            {/* <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              TV channels
            </p> */}
            <hr className="h-px my-5 bg-slate-700 border-0" />
<div className="flex flex-row items-center justify-center"> {/* Center align price and month */}
  <h2 className="text-4xl font-bold">&#8377;199.99</h2>
  <p className="text-white mt-4 ml-2">/month</p> {/* Add ml-2 to create space */}
</div>
            <button onClick={() => handleButtonClick(39999, "GOLD")}
            className="w-3/4 h-[50px] bg-black text-white p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800 ml-[2px] my-[25px]">
              SELECT PLAN
            </button>
          </div>
        </div>


        <div style={{ marginTop: '25px' }}> {/* Increase marginTop to shift the card further down */}
    <div className="bg-slate-800 text-white p-4 rounded-lg w-[350px] h-[340px] transition-colors duration-300 ease-in-out hover:bg-blue-500 justify-evenly my-4">
      <div className="ml-[10px]">
        <h2 className="text-2xl my-2 font-semibold">SILVER</h2>
        <hr className="h-px my-5 bg-slate-700 border-0" />
        <p className="flex flex-row my-2 ">
          <GoCheck className="mr-2 mt-1" color="green" /> AI Powered Search
        </p>
        <p className="flex flex-row my-2">
          <GoCheck className="mr-2 mt-1" color="green" /> Adaptive Streaming upto 480p
        </p>
        <p className="flex flex-row my-2">
          <GoCheck className="mr-2 mt-1" color="green" /> Premium Movies
        </p>

        <hr className="h-px my-5 bg-slate-700 border-0" />
        <div className="flex flex-row items-center justify-center"> {/* Center align price and month */}
          <h2 className="text-4xl font-bold">&#8377;0</h2>
          <p className="text-white mt-4 ml-2">/month</p> {/* Add ml-2 to create space */}
        </div>

        <button onClick={() => handleButtonClick(0, "FREE")}
          className="w-3/4 h-[50px] bg-black text-white p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800 ml-[2px] mt-2"> {/* Adjust mt-4 for margin-top */}
          SELECT PLAN
        </button>
      </div>
    </div>
    <Modal isOpen={isPaymentSuccessModalOpen} onClose={() => setIsPaymentSuccessModalOpen(false)} subscriptionName={subscriptionName}>
        <div>
          <h2>Payment Successful</h2>
          <p>You have subscribed to {subscriptionName}.</p>
        </div>
      </Modal>
  </div>


      </div>
    </div>
  );
};

export default Cards;
