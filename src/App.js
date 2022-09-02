import Header from "./Header";
import Section from "./Section";
import Watch from "./Watch";
import Read from "./Read";
import Shop from "./Shop";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
function App() {
  const [num, setNum] = useState(makeArray)

  function makeArray() {
    const arr = []
    for (let i = 0; i < 16; i++) {
      arr[i] = i
    }
    return arr
  }
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Watch array={num} />} />
          <Route path="/read" element={<Read />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
