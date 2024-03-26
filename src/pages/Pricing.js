import React, { useState } from "react";

// function Pricing() {
//   const [selectedCell, setSelectedCell] = useState(null);
//   const handleCellClick = (e) => {
//     setSelectedCell(e.target.textContent);
//   };
function Pricing() {
  const [selectedCell, setSelectedCell] = useState(null);
  // const [selectedSubscription, setSelectedSubscription] = useState(null);
  const handleCellClick = (e) => {
    setSelectedCell(e.target.textContent);
  };
  const handleButtonClick = (subscriptionId,subscriptionName) => {
    // Here, you can use the selectedSubscription and selectedCell values
    console.log("Selected Subscription ID:", subscriptionId);
    console.log("Selected Subscription Item Name:", subscriptionName);
    // Redirect or perform any other action as needed
  };
  return (
    <div
      style={{ backgroundColor: "#010B13", padding: "40px" }}
      className="text-white py-8 min-h-screen flex"
    >
      <div className="container mx-auto mb-8 flex-1">
        <h1 className="text-5xl font-bold text-left mb-11 ">Pricing Plans</h1>

        <div className="text-left mb-8">
          <p className="text-base font-medium mb-4">
            Many desktop publishing packages and{" "}
            <a href="https://example.com" style={{ color: "darkblue" }}>
              web page
            </a>
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </p>
          <p className="text-base font-medium mb-4">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
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
              <h2 className="text-lg font-semibold mb-2">
                🚀 Choose Your Plan 1
              </h2>
              <p className="text-base font-medium">
                It to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining
              </p>
            </div>
            {/* Box 2 */}
            <div className="border border-white rounded p-4 hover:bg-white hover:text-black transition duration-300">
              <h2 className="text-lg font-semibold mb-2">
                🌟 Choose Your Plan 2
              </h2>
              <p className="text-base font-medium">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text
              </p>
            </div>
            {/* Box 3 */}
            <div className="border border-white rounded p-4 hover:bg-white hover:text-black transition duration-300">
              <h2 className="text-lg font-semibold mb-2">
                💼 Choose Your Plan 3
              </h2>
              <p className="text-base font-medium">
                {" "}
                It to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially
              </p>
            </div>
            {/* Box 4 */}
            <div className="border border-white rounded p-4 hover:bg-white hover:text-black transition duration-300">
              <h2 className="text-lg font-semibold mb-2">
                🔥 Choose Your Plan 4
              </h2>
              <p className="text-base font-medium">
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose
              </p>
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
                      style={{ width: "25%", fontSize: "140%" }}
                    >
                      REGULAR
                    </td>
                    <td
                      onClick={handleCellClick}
                      className={`text-blue-500 ${
                        selectedCell === "PREMIUM" && "bg-white text-black"
                      }`}
                      style={{ width: "25%", fontSize: "140%" }}
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
                    <td style={{ fontSize: "120%" }} className="text-white">
                      $11.99
                    </td>
                    <td style={{ fontSize: "120%" }} className="text-white">
                      $34.99
                    </td>
                    <td style={{ fontSize: "120%" }} className="text-white">
                      $49.99
                    </td>
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
                      <button
                        onClick={() => handleButtonClick(1, "REGULAR")}
                        className="btn rounded-full   py-4 px-9 bg-blue-900 hover:text-black transition duration-300 hover:bg-white transition duration-300"
                      >
                        Select Plan
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleButtonClick(2, "PREMIUM")}
                        className="btn rounded-full   py-4 px-9 bg-blue-900 hover:text-black transition duration-300 hover:bg-white transition duration-300"
                      >
                        Select Plan
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleButtonClick(3, "PREMIUM+TV CHANNELS")
                        }
                        className="btn rounded-full   py-4 px-9 bg-blue-900 hover:text-black transition duration-300 hover:bg-white transition duration-300"
                      >
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
