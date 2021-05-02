import { useEffect } from "react";
import { useHistory } from "react-router";

const loggedIn = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (token) history.push("/feed");
  }, [token, history]);
};

export default loggedIn;
