import "./App.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Single } from "./pages/Single";
import { Write } from "./pages/Write";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Profile from "./pages/Profile";
import Update from "./pages/Update";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/post/:id" element={<Single />} />
              <Route path="/write" element={<Write />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/update/:id" element={<Update />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
