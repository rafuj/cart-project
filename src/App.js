import React from "react";
import CartContainer from "./CartContainer";
// components
import Navbar from "./Navbar";

// items

function App() {
  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
