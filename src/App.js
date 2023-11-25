import Login from "pages/Auth/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
