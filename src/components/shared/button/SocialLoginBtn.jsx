import { Button } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";

const SocialLoginBtn = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Button color="primary" variant="flat" className="text-green-800">
          <FaGoogle /> Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginBtn;
