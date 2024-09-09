import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TokenValidation from "./components/TokenValidation.jsx";

import BodyContainer from "./components/BodyContainer.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Tasks from "./pages/Tasks.jsx";

function RouterComponent() {
  const [logged, setLogged] = useState(null);

  return (
    <BrowserRouter>
      <Header logged={logged} />
      <TokenValidation setLogged={setLogged} />
      <Routes>
        {logged && (
          <>
            <Route path="/" element={<BodyContainer />}>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
            </Route>
          </>
        )}
        {!logged && (
          <>
            <Route path="/" element={<BodyContainer />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastrar" element={<Register />} />
            </Route>
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouterComponent;
