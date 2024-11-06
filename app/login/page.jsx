import LoginForm from "./_component/LoginForm";

const LoginPage = () => {
    return (
        <div className="bg-[#F0F0F0] w-full h-custom flex items-center justify-center overflow-y-auto">
            <div className="container mx-auto px-4 pt-40 md:pt-0 mb-10 md:mb-0">
                <div className="flex justify-center items-center">
                    <div className="w-[853px] bg-white px-[75px] py-[40px] rounded-[5px]">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;