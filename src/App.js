import TopBar from "components/TopBar";
import Find from "pages/Find/Find";
import Main from "pages/Main/Main";
import SignUp from "pages/SignUp/SignUp";
import Alert from "popup/Alert";
import Loading from "popup/Loading";
import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { alertAtom } from "recoil/alertAtom";
import { authenticate } from "api/authApi";
import { loadingAtom } from "recoil/loadingAtom";

function App() {
  const nav = useNavigate(); // nav 제어
  const location = useLocation(); // location 제어
  useEffect(() => {
    authenticate()
      .then((response) => {
        const path = location.pathname.split("/")[1];
        if (response.data) {
          if (path === "") nav("/");
          else if (path === "signup" || path === "find") nav("/");
          else nav("/" + location.pathname.split("/")[1]);
        } else nav("/");
      })
      .catch(() => nav("/"));
  }, []);
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gray-100">
        <TopBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/find" element={<Find />}></Route>
        </Routes>
        {useRecoilValue(alertAtom).state && <Alert />}
        {useRecoilValue(loadingAtom).state && <Loading />}
      </div>
    </>
  );
}

export default App;
