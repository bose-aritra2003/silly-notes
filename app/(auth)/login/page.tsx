import {Brand} from "@/components/ui/brand";
import {LoginForm} from "@/components/client/loginForm";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full md:w-1/2 lg:w-5/12">
            <Brand className="flex items-center mb-6 text-2xl font-semibold text-gray-900 transition ease-in-out hover:scale-105" />
            <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Log in to your account
                    </h1>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;