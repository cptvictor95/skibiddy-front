import { useEffect } from "react";
import { useHistory } from "react-router";

const useAuth = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (!token) history.push("/signin");
  }, [token, history]);
};

export default useAuth;
