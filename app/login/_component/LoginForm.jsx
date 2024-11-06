import eyeoff from "@/app/images/icons/Eye-off-outline.svg";
import facebook from "@/app/images/icons/facebook.svg";
import google from "@/app/images/icons/google.svg";
import Image from "next/image";

const LoginForm = () => {
    return (
        <form className="grid grid-cols-2 gap-11">
            <div>
                <h3 className="text-xl font-medium text-black mb-[18px]">Welcome to Alzaf.com</h3>
                <div className="inputs space-y-[11px]">
                    <div>
                        <label for="full-name" className="block mb-[6px] text-sm font-normal text-[#434343]">Full name</label>
                        <input type="text" id="full-name" className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary block w-full px-[10px] py-[8px]" placeholder="KhHumayun Kabir" required />
                    </div>
                    <div>
                        <label for="phone-email" className="block mb-[6px] text-sm font-normal text-[#434343]">Phone Number or Email</label>
                        <input type="text" id="phone-email" className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary block w-full px-[10px] py-[8px]" placeholder="Phone or Email" required />
                    </div>
                    <div className="relative">
                        <label for="password" className="block mb-[6px] text-sm font-normal text-[#434343]">Password</label>
                        <input type="text" id="password" className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary block w-full px-[10px] py-[8px]" placeholder="Please enter your password" required />
                        <button className="absolute top-[35px] right-[8px]">
                            <Image
                                src={eyeoff}
                                alt="icon"
                            />
                        </button>
                    </div>
                    <div className="relative">
                        <label for="confirm-password" className="block mb-[6px] text-sm font-normal text-[#434343]">Confirm Password</label>
                        <input type="text" id="confirm-password" className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary block w-full px-[10px] py-[8px]" placeholder="Confirm password" required />
                        <button className="absolute top-[35px] right-[8px]">
                            <Image
                                src={eyeoff}
                                alt="icon"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-medium text-primary mb-[18px]">Login</h3>
                <div className="space-y-[5px]">
                    <div>
                        <div className="flex items-center gap-[5px]">
                            <div>
                                <label for="birth" className="block mb-[6px] text-sm font-normal text-[#434343]">Birthday
                                </label>
                                <div className="flex items-center gap-[5px]">
                                    <select id="month" className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary w-full px-[10px] py-[8px]">
                                        <option selected>Month</option>
                                        <option value="january">january</option>
                                        <option value="february">february</option>
                                    </select>
                                    <select id="day" className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary w-full px-[10px] py-[8px]">
                                        <option selected>Day</option>
                                        <option value="january">01</option>
                                        <option value="february">12</option>
                                    </select>
                                    <select id="year" className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary w-full px-[10px] py-[8px]">
                                        <option selected>Year</option>
                                        <option value="january">1998</option>
                                        <option value="february">1999</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label for="gender" className="block mb-[6px] text-sm font-normal text-[#434343]">Gender
                                    </label>
                                    <select id="month" className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary w-full px-[10px] py-[8px]">
                                        <option selected>Gender</option>
                                        <option value="january">Male</option>
                                        <option value="february">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-primary rounded bg-gray-50 focus:ring-3 focus:ring-primary" required />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-normal text-[#9C9C9C]">I’d like to receive exclusive offers and promotions via SMS.</label>
                    </div>
                </div>
                <div className="sign-buttons mt-[8px]">
                    <button className="w-full py-[10px] bg-primary text-sm text-white rounded-[2px]">Sign Up</button>
                    <div className="flex items-center justify-center my-[5px]">
                        <p className="text-sm text-[#707070]">Or</p>
                    </div>
                    <button className="w-full flex items-center justify-center py-[10px] border border-primary text-sm text-black rounded-[2px] mb-2">
                        <Image
                            src={facebook}
                            alt="icon"
                        />
                        <span className="ml-2">Sign Up with Facebook</span>
                    </button>
                    <button className="w-full flex items-center justify-center py-[10px] border border-primary text-sm text-black rounded-[2px]">
                        <Image
                            src={google}
                            alt="icon"
                        />
                        <span className="ml-2">Sign Up with Google</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;