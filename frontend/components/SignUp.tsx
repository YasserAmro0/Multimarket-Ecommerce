import { SignUpAndLoginProps } from "@/types";
import {
    Card,
    Button,
    Typography,
} from "@material-tailwind/react";

const SignUp = ({ setLoginPage }: SignUpAndLoginProps)=> {
    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label className="text-gray-600 mb-1">Name</label>
                        <input type="text" className="custom-border py-2 px-3 border rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 mb-1">Email</label>
                        <input type="email" className="custom-border py-2 px-3 border rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 mb-1">Password</label>
                        <input type="password" className="custom-border py-2 px-3 border rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600 mb-1"> Confirm Password</label>
                        <input type="password" className="custom-border py-2 px-3 border rounded" />
                    </div>
                </div>
                
                <Button className="mt-6 py-2" fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <button  className="font-medium text-gray-900" onClick={() => setLoginPage(true)}>
                        Sign In
                    </button>
                </Typography>
            </form>
        </Card>
    );
}

export default SignUp;