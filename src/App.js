import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/Profile/ProfilePage";
import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route exact path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </>
  );
};

export default App;
