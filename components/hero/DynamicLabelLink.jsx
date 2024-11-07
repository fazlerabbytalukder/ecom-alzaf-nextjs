import linkImg from '@/app/images/icons/link-icon.svg';
import Image from 'next/image';
import Link from 'next/link';

const DynamicLabelLink = ({ leftOffset, childrens }) => {
    return (
        <div className={`secondLabel absolute top-0 left-[${leftOffset}px] z-10`}>
            <div className="w-[230px] h-[313px] overflow-y-auto bg-white space-y-[5px] p-[5px]">
                {childrens && childrens.map((child) => (
                    <Link key={child.id} href={child?.link || "#"} className="text-xs text-secondary flex items-center justify-between">
                        <div className='flex items-center gap-2'>
                            <Image
                                src={linkImg}
                                alt="icon"
                            />
                            {child?.title}
                        </div>
                        <div className="right-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" viewBox="0 0 5 9" fill="#434343">
                                <path d="M1.57997 1.04207C1.3961 0.859829 1.09931 0.861153 0.917068 1.04503C0.734828 1.2289 0.736152 1.52569 0.920026 1.70793L2.02188 2.8C2.46906 3.24321 2.77582 3.54824 2.98338 3.80669C3.185 4.05775 3.25417 4.21901 3.27258 4.36343C3.28414 4.45412 3.28414 4.54588 3.27258 4.63656C3.25417 4.78099 3.185 4.94225 2.98338 5.19331C2.77582 5.45176 2.46907 5.75679 2.02188 6.2L0.920026 7.29207C0.736153 7.47431 0.734829 7.7711 0.917069 7.95497C1.09931 8.13885 1.3961 8.14017 1.57997 7.95793L2.70168 6.84619C3.12416 6.42748 3.46946 6.08526 3.71434 5.78034C3.96898 5.46326 4.15332 5.14142 4.20256 4.7551C4.22415 4.58571 4.22415 4.41429 4.20256 4.2449C4.15332 3.85858 3.96898 3.53674 3.71434 3.21966C3.46946 2.91474 3.12417 2.57253 2.70168 2.15381L1.57997 1.04207Z" fill="#434343" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DynamicLabelLink;
