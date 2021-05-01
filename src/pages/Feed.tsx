import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import useAuth from "../hooks/useAuth";
import Main from "../layouts/Main";

const Feed = () => {
  useAuth();
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    return history.push("/");
  };

  return (
    <Main title="Feed">
      <Button onClick={logout}>Logout</Button>
    </Main>
  );
};

export default Feed;
