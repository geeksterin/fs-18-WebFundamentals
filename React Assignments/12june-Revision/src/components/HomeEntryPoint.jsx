import { Outlet } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function HomeEntryPoint() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Enterning the main gate", user);
    if (user == null) {
      // redirect= > /login
      navigate("/login");
    }
  }, []);

  return <h1>Hi</h1>;
}
