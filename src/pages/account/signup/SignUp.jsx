import { Button, Divider, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.jpg";
import SocialLoginBtn from "../../../components/shared/button/SocialLoginBtn";
const SignUp = () => {
  return (
    <div>
      <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50  px-4 sm:px-6 lg:px-8">
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white   rounded-xl shadow-lg">
            <div className="flex flex-col justify-center items-center h-full select-none">
              <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <Image src={logo} className="w-64 h-32" />
                <p className="m-0 text-[16px] font-semibold ">Register</p>
                <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                  Get started with our app, just start section and enjoy
                  experience.
                </span>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs  ">Email</label>
                <input
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none "
                  placeholder="element@example.com"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs ">Password</label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none  "
                placeholder="••••"
              />
            </div>

            <div className="">
              <Button>Register</Button>
              <p>
                Already have an account!{" "}
                <span>
                  <Link to="/login">Login</Link>{" "}
                </span>
              </p>
            </div>
            <Divider className="my-3" />
            <div>
              <SocialLoginBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
