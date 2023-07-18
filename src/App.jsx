import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Comments from "./pages/Comments";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
