import "./Assets/Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home";
import Property from "./pages/Property";
import AccountInfo from "./pages/AccountInfo";
import Search from "./pages/Search";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { getUserData } from "./services/api";
import { addUser, addUserId, selectUserData } from "./redux/slices/userSlice";
import { useSelector } from "react-redux";
import ResetPassword from "./pages/Auth/ResetPassword";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  useEffect(() => {
    const Start = async () => {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        const user_jwt = jwtDecode(jwt);
        const { data } = await getUserData(user_jwt._id);
        dispatch(addUser(data));
        dispatch(addUserId(user_jwt._id));
      }
    };
    Start();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Auth />} />
          <Route path="/property" element={<Property />} />
          <Route path="/account" element={user && <AccountInfo />} />
          <Route path="/reset/:id" element={<ResetPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
