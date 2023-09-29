import { FaArrowRightLong } from 'react-icons/fa6';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { IoWallet } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const navData = [
	{ name: 'Home', path: '/', icon: <AiFillHome /> },
	{ name: 'Cards', path: '/cards', icon: <BsFillCreditCardFill /> },
	{ name: 'Transfers', path: '/transfers', icon: <FaArrowRightLong /> },
	{
		name: 'Funds',
		path: '/funds',
		icon: <IoWallet />,
	},
];

const Nav = () => {
	const router = useRouter();
	const pathname = router.pathname;

	return (
		<nav className="flex flex-row justify-between gap-y-4 fixed h-max top-0 left-0 bottom-0 mt-auto w-full">
			<div className="flex w-full xl:w-screen items-center justify-between px-4 md:px-40 h-[70px] xl:h-max py-7  rounded-t-[10px] text-3xl xl:text-xl linerGradient">
				{navData.map((link, index) => {
					return (
						<Link
							className={`${
								link.path === pathname && 'text-accent'
							} relative flex flex-col items-center group hover:text-accent transition-all duration-300 font-semibold`}
							href={link.path}
							key={index}
						>
							<div className="sm:hidden text-2xl">
								{link.icon}
							</div>
							<div className="max-sm:text-sm font-medium">
								{link.name}
							</div>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
