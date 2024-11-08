import Image from "next/image";
import Link from "next/link";

const DynamicLabelTwoLink = ({ childrens }) => {
    return (
        <div className={`secondLabel fixed top-[100px] left-[476px] z-10`}>
            <div className="w-[230px] h-[313px] overflow-y-auto bg-white space-y-[5px] p-[5px]">
                {childrens && childrens.map((child) => (
                    <Link key={child.id} href={child?.link || "#"} className="text-xs text-secondary flex items-center justify-between">
                        <div className='flex items-center gap-2'>
                            <Image width={10} height={10} src={child?.icon} alt="icon" />
                            {child?.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DynamicLabelTwoLink;