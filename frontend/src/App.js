import logo from './logo.svg';
// import PastOrderContainer from './components/PastOrderComponents/pastOrderContainer';
// import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     // <div className="App">
//     {/* <PastOrderContainer/> */}
//     // </div>
//     <BrowserRouter>
//     <Routes>
     
//       {/* <Route exact path="/createorders" element={<Createorders />} />
//       <Route exact path="/order" element={<Jumporders />} /> */}
//     </Routes>
//   </BrowserRouter>

//   );
// }

// export default App;
import Createorders from "./components/createorderContainer/CreateOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Jumporders from "./components/createorderContainer/Jumporders";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route exact path="/createorders" element={<Createorders />} />
        {/* <Route exact path="/order" element={<Jumporders />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
