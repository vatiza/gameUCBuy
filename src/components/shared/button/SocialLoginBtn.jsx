import { Button } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLoginBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("from:", from);
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="flex justify-center">
        <Button
          onClick={() => handleGoogleLogin()}
          color="primary"
          variant="flat"
          className="text-green-800"
        >
          <FaGoogle /> Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginBtn;
