import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin(){
    return  <div className="bg-slate-300 h-screen flex justify-center">
       <div className="flex flex-col justify-center">
       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign In"} />
        <SubHeading label={"Enter your credential to access your account"}/>
        <InputBox label={"Email"} placeholder={"abc@gmail.com"} />
        <InputBox label={"Password"} />
        <div className="p-4">
        <Button label={"Login"}/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
        </div>
        </div>
    </div>
}