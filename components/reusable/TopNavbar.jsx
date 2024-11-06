
const TopNavbar = () => {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-8">
                        <form className="inline-block">
                            <select id="countries" className="text-primary bg-transparent text-sm rounded-lg focus:ring-primary focus:border-primary block w-full">
                                <option selected>English</option>
                                <option value="US">Bangla</option>
                                <option value="DE">German</option>
                            </select>
                        </form>
                        <p className="text-xs text-secondary hidden md:block">Help Center</p>
                        <p className="text-xs text-secondary hidden md:block">Helpline: 0964781656</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <p className="text-xs text-secondary hidden md:block">Become a Seller</p>
                        <p className="text-xs text-secondary hidden md:block">Order Track</p>
                        <button className="text-xs text-primary">Sign up / Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;