import React, { useState } from "react";

function Pricing() {
  const [selectedCell, setSelectedCell] = useState(null);
  const handleCellClick = (e) => {
    setSelectedCell(e.target.textContent);
  };
  return (
    <div
      style={{ backgroundColor: "#010B13" ,padding:"40px" }}
      className="text-white py-8 min-h-screen flex"
    >
      <div className="container mx-auto mb-8 flex-1">
        <h1 className="text-5xl font-bold text-left mb-11 ">Pricing Plans</h1>
        
        <div className="text-left mb-8">
          <p className="text-base font-medium mb-4">
          Experience unlimited access to movies and TV shows with our Regular Membership, available at ₹999 per year, ₹199 per month, or ₹499 for 3 months. Elevate your entertainment with our Premium Membership, offering exclusive content and additional features for ₹1499 per year, ₹299 per month, or ₹599 for 3 months. For the ultimate entertainment experience, opt for our Premium+TV Channels membership at ₹1999 per year or ₹399 per month, providing access to premium content and TV channels. Unlock a world of entertainment today!
          </p>
          <p className="text-base font-medium mb-4">
          To sign up for FlixTv Premium membership anytime in the future:
          </p>
        </div>
        {/* </div> */}
        <div
          style={{ backgroundColor: "#010B13" }}
          className="container  mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Box 1 */}
            <div className="border border-white rounded p-4 hover:bg-white hover:text-black transition duration-300">
              <h2 className="text-lg font-semibold mb-2">🚀 Step 1</h2>
              <p className="text-base font-medium">Visit our website.</p>
            </div>
            {/* Box 2 */}
            <div className="border border-white rounded p-4 hover:bg-white hover:text-black transition duration-300">
              <h2 className="text-lg font-semibold mb-2">🌟 Step 2</h2>
              <p className="text-base font-medium">Choose your desired membership plan.</p>
            </div>
            {/* Box 3 */}
            <div className="border border-white rounded p-4 hover:bg-white hover:text-black transition duration-300">
              <h2 className="text-lg font-semibold mb-2">💼 Step 3</h2>
              <p className="text-base font-medium"> Click or tap on the sign-up button.</p>
            </div>
            {/* Box 4 */}
            <div className="border border-white rounded p-4 hover:bg-white hover:text-black transition duration-300">
              <h2 className="text-lg font-semibold mb-2">🔥 Step 4</h2>
              <p className="text-base font-medium">Follow the on-screen instructions to complete the payment and enjoy unlimited entertainment.</p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"> */}
          <div className="flex justify-center mb-10">
            {/* <div className="bg-blue-800 p-6 rounded-lg mx-6 overflow-x-auto"> */}
            <div
              style={{ backgroundColor: "#040720" }}
              className="p-6 rounded-lg overflow-x-auto w-full"
            >
              <table className="w-full">
                <tbody>
                  <tr>
                    <td onClick={handleCellClick} style={{ width: "25%" }}></td>
                    <td
                      onClick={handleCellClick}
                      className={`text-blue-500 ${
                        selectedCell === "REGULAR" && "bg-white text-black"
                      }`}
                      style={{ width: "25%" , fontSize: "140%"}}
                    >
                      REGULAR
                    </td>
                    <td
                      onClick={handleCellClick}
                      className={`text-blue-500 ${
                        selectedCell === "PREMIUM" && "bg-white text-black"
                      }`}
                      style={{ width: "25%" , fontSize: "140%" }}
                    >
                      PREMIUM
                    </td>

                    <td
                      onClick={handleCellClick}
                      className={`text-blue-500 ${
                        selectedCell === "PREMIUM + TV channels" &&
                        "bg-white text-black"
                      }`}
                      style={{ width: "15%", fontSize: "140%" }}
                    >
                      PREMIUM + TV channels
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "25%" }}></td>
                    <td style={{  fontSize: "120%" }} className="text-white">$11.99</td>
                    <td style={{  fontSize: "120%" }} className="text-white">$34.99</td>
                    <td style={{  fontSize: "120%" }} className="text-white">$49.99</td>
                  </tr>
                  <tr>
                    <td style={{ width: "25%" }}></td>
                    <td className="text-white">/ month</td>
                    <td className="text-white">/ month</td>
                    <td className="text-white">/ month</td>
                  </tr>
                  <tr>
                    <td className="text-white" style={{ width: "25%" }}>
                      FlixTV Orginals
                    </td>

                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white " style={{ width: "25%" }}>
                      Get unlimited access to the largest streaming library with
                      no ads
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white " style={{ width: "25%" }}>
                      Watch Live TV online and on supported devices
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white " style={{ width: "25%" }}>
                      Switch plans or cancel anytime
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white" style={{ width: "25%" }}>
                      Record live TV with 50 hours of Cloud DVR storage
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-red-500">close</i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white " style={{ width: "25%" }}>
                      Stream 65+ top Live
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-red-500">close</i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white " style={{ width: "25%" }}>
                      TV Channels
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-red-500">close</i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-red-500">close</i>{" "}
                    </td>
                    <td>
                      {" "}
                      <i class="material-icons text-green-500">
                        check small
                      </i>{" "}
                    </td>
                  </tr>
                  <tr style={{ height: "60px" }}>
                    <td style={{ width: "25%" }}></td>
                    <td>
                      <button className="btn rounded-full   py-4 px-9 bg-blue-900 hover:text-black transition duration-300 hover:bg-white transition duration-300">
                        Select Plan
                      </button>
                    </td>
                    <td>
                      <button className="btn rounded-full   py-4 px-9 bg-blue-900 hover:text-black transition duration-300 hover:bg-white transition duration-300">
                        Select Plan
                      </button>
                    </td>
                    <td>
                      <button className="btn rounded-full   py-4 px-9 bg-blue-900 hover:text-black transition duration-300 hover:bg-white transition duration-300">
                        Select Plan
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
