import cart from '@/app/images/icons/cart.svg';
import cloud from '@/app/images/icons/cloud.svg';
import love from '@/app/images/icons/love.svg';
import search from '@/app/images/icons/search.svg';
import user from '@/app/images/icons/user.svg';
import logo from '@/app/images/logo.png';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='container mx-auto px-4 py-[13px]'>
            <div className="flex items-center justify-between gap-8">
                <Link href="/" className="logo">
                    <Image
                        src={logo}
                        alt="logo"
                    />
                </Link>
                <div className="search w-full lg:block hidden">
                    <form className="block">
                        <div className="relative">
                            <input type="search" id="default-search" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#EFF0F5] focus:ring-primary focus:border-primary" placeholder="Search" required />
                            <button type="submit" className="text-white absolute end-0 bottom-0 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-[13px]">
                                <Image
                                    src={search}
                                    alt="icon"
                                />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="buttons flex items-center gap-1 sm:gap-7">
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button className="icon-button">
                            <Image
                                src={user}
                                alt="icon"
                            />
                        </button>
                        <button className="icon-button">
                            <Image
                                src={love}
                                alt="icon"
                            />
                        </button>
                        <button className="icon-button">
                            <Image
                                src={cart}
                                alt="icon"
                            />
                        </button>
                    </div>
                    <button className="icon-button-two w-[100px] h-[27px] sm:w-[177px] sm:h-[44px]">
                        <Image
                            src={cloud}
                            alt="icon"
                            width={177}
                            height={44}
                            className='w-full h-full'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;