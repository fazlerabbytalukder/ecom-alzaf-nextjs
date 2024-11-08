'use client'
import eyeoff from "@/app/images/icons/Eye-off-outline.svg";
import facebook from "@/app/images/icons/facebook.svg";
import google from "@/app/images/icons/google.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    phoneOrEmail: yup.string().required("Phone Number or Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one digit")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    remember: yup.bool().oneOf([true], "You must resolve the error"),
});

const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => currentYear - i);
};

const generateDays = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const days = generateDays(selectedMonth, selectedYear);
    const years = generateYears();

    const onSubmit = (data) => {
        console.log("Form submitted with:", data);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-11">
            {/* left side forms  */}
            <div>
                <h3 className="text-xl font-medium text-black mb-[18px]">Welcome to Alzaf.com</h3>
                <div className="inputs space-y-[11px]">
                    <div>
                        <label htmlFor="full-name" className="block mb-[6px] text-sm font-normal text-[#434343]">Full name</label>
                        <input
                            type="text"
                            id="full-name"
                            {...register("fullName")}
                            className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary block w-full px-[10px] py-[8px]"
                            placeholder="Humayun Kabir"
                        />
                        <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="phone-email" className="block mb-[6px] text-sm font-normal text-[#434343]">Phone Number or Email</label>
                        <input
                            type="text"
                            id="phone-email"
                            {...register("phoneOrEmail")}
                            className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary block w-full px-[10px] py-[8px]"
                            placeholder="Phone or Email"
                        />
                        <p className="text-red-500 text-sm">{errors.phoneOrEmail?.message}</p>
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block mb-[6px] text-sm font-normal text-[#434343]">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary block w-full px-[10px] py-[8px]"
                            placeholder="Please enter your password"
                        />
                        <button type="button" className="absolute top-[35px] right-[8px]">
                            <Image src={eyeoff} alt="icon" />
                        </button>
                        <p className="text-red-500 text-sm">{errors.password?.message}</p>
                    </div>
                    <div className="relative">
                        <label htmlFor="confirm-password" className="block mb-[6px] text-sm font-normal text-[#434343]">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            {...register("confirmPassword")}
                            className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary block w-full px-[10px] py-[8px]"
                            placeholder="Confirm password"
                        />
                        <button type="button" className="absolute top-[35px] right-[8px]">
                            <Image src={eyeoff} alt="icon" />
                        </button>
                        <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
                    </div>
                </div>
            </div>
            {/* right side forms  */}
            <div>
                <h3 className="text-xl font-medium text-primary mb-[18px] md:block hidden">Login</h3>
                <div className="space-y-[5px]">
                    <div>
                        <div className="flex items-center gap-[5px]">
                            <div>
                                <label htmlFor="birth" className="block mb-[6px] text-sm font-normal text-[#434343]">Birthday</label>
                                <div className="flex items-center gap-[5px]">
                                    <select
                                        id="month"
                                        onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                                        className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary w-full px-[10px] py-[8px]"
                                    >
                                        <option value="" disabled selected>Month</option>
                                        {months.map((month, index) => (
                                            <option key={index} value={index + 1}>{month}</option>
                                        ))}
                                    </select>
                                    <select
                                        id="day"
                                        {...register("day")}
                                        className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary w-full px-[10px] py-[8px]"
                                    >
                                        <option value="" disabled selected>Day</option>
                                        {days.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </select>
                                    <select
                                        id="year"
                                        onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                                        className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary w-full px-[10px] py-[8px]"
                                    >
                                        <option value="" disabled selected>Year</option>
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="gender" className="block mb-[6px] text-sm font-normal text-[#434343]">Gender</label>
                                <select
                                    id="gender"
                                    {...register("gender")}
                                    className="bg-transparent border border-[#9C9C9C] text-gray-900 text-sm rounded-[2px] focus:ring-primary focus:border-primary w-full px-[10px] py-[8px]"
                                >
                                    <option value="" disabled selected>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start mb-3 mt-2">
                    <input
                        id="remember"
                        type="checkbox"
                        {...register("remember")}
                        className="w-4 h-4 border border-primary rounded bg-gray-50 focus:ring-3 focus:ring-primary"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm font-normal text-[#9C9C9C]">I’d like to receive exclusive offers and promotions via SMS.</label>
                </div>
                <p className="text-red-500 text-sm">{errors.remember?.message}</p>
                <div className="sign-buttons mt-[8px]">
                    <button type="submit" className="w-full py-[10px] bg-primary text-sm text-white rounded-[2px]">Sign Up</button>
                    <div className="flex items-center justify-center my-[5px]">
                        <p className="text-sm text-[#707070]">Or</p>
                    </div>
                    <button type="button" className="w-full flex items-center justify-center py-[10px] border border-primary text-sm text-black rounded-[2px] mb-2">
                        <Image src={facebook} alt="icon" />
                        <span className="ml-2">Sign Up with Facebook</span>
                    </button>
                    <button type="button" className="w-full flex items-center justify-center py-[10px] border border-primary text-sm text-black rounded-[2px]">
                        <Image src={google} alt="icon" />
                        <span className="ml-2">Sign Up with Google</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;