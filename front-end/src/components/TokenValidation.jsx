import { useEffect } from "react";
import { useLocation } from "react-router";
import { checkLogin } from "../api/user.js";

const TokenValidation = ({ setLogged }) => {
  const location = useLocation();

  useEffect(() => {
    checkLogin().then((res) => {
      setLogged(res);
    });
  }, [location]);

  return;
};

export default TokenValidation;
