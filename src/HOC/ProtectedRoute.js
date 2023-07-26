import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoutes = (WrappedComponent) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const { user } = useUserAuth();

      if (!user) {
        navigate('/'); // Redirect to unauthorized page or any other route
      }

    // Render the wrapped component if authorized
    return user 
    ?<WrappedComponent {...props} /> 
    :<div style={{display:'flex',alignItems:"center",justifyContent:"center",height:"100vh"}} >Not Authorized</div>;
  };

  return Wrapper;
};

export default ProtectedRoutes;