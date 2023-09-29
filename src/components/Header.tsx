import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
	return (
		<header className="flex items-center leading-4 mt-5">
			<div className="flex w-full justify-between items-end ">
				<div className="flex flex-row items-end gap-x-2">
					<Image
						src={'/logo.png'}
						alt={'logo'}
						width={30}
						height={47}
					/>
					<span className="max-sm:text-[12px] font-bold text-[#4D6AE4]">
						СoinsFill
					</span>
				</div>
				<div className="flex flex-row gap-x-4 items-center">
					<BiSearch className="text-[17px]" />

					<Image
						src={'/icon.svg'}
						alt={'icon'}
						width={24}
						height={24}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
