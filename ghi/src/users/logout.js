import { Navigate } from "react-router-dom";
import {useToken} from "../Auth"

function Logout() {
  const [, , logout] = useToken();
  logout();
  return <Navigate to="/" />;
}

export default Logout;
