import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { Button, ThemeButton } from './Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type Mode = 'login' | 'registration';

export const LoginSignInPopup = ({
	mode,
	onClose,
}: {
	mode: Mode;
	onClose: () => void;
}) => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [passwordType, setPasswordType] = useState('password');

	const changePasswordVisibility = () => {
		setPasswordVisibility(!passwordVisibility);
		setPasswordType(passwordType === 'password' ? 'text' : 'password');
	};

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		if (mode === 'registration') {
			// Обработка данных для регистрации
		} else {
			// Обработка данных для входа
		}
	}

	const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="z-10 fixed w-full h-full bg-black/90 top-0 left-0"
			onClick={handlePopupClick}
		>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
				}}
				className="mt-11 m-auto max-w-[375px] pt-6 pb-14 px-4 purpleGradient popupRadius"
			>
				<motion.div
					whileHover={{ scale: 1.2, rotate: 180 }}
					className="absolute h-[38px] w-[38px] -right-1 -top-1 bg-[#FFC543] rounded-full cursor-pointer "
					onClick={onClose}
				>
					<Image
						src={'/close.svg'}
						alt={'close button'}
						width={15}
						height={15}
						className="absolute top-1/2 transform -translate-y-1/2 translate-x-1/2 right-1/2"
					/>
				</motion.div>
				<div className="absolute bg-logo w-full h-full bg-no-repeat cover mix-blend-screen px-2"></div>
				<div className="text-white px-1 relative">
					<h2 className="h2 text-2xl text-center pt-[30px]">
						{mode === 'registration' ? 'Регистрация' : 'Логин'}
					</h2>

					<form onSubmit={onSubmit}>
						<div className="flex flex-col mt-8 gap-4 px-3 mb-6">
							<label htmlFor="userPhone">
								<span className="max-sm:text-[14px] font-bold pl-1">
									Ваш телефон
								</span>
								<input
									id="userPhone"
									type="tel"
									placeholder="+7 961 825 70 55"
									required
									className="w-full text-black max-2-[293px] authInput phoneInput pl-[57px] text-[14px]"
								/>
							</label>

							<label htmlFor="userPassword">
								<span className="max-sm:text-[14px] font-bold pl-1">
									Пароль
								</span>
								<div className="relative">
									<input
										id="userPassword"
										type={passwordType}
										placeholder="********"
										className="w-full text-black max-2-[293px] text-[14px] authInput passwordInput pl-[57px] "
									/>
									<div
										className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
										onClick={changePasswordVisibility}
									>
										{!passwordVisibility && (
											<Image
												alt={'visible'}
												src={'/visible.svg'}
												width={18}
												height={15}
											/>
										)}
										{passwordVisibility && (
											<Image
												alt={'visible'}
												src={'/notvisible.svg'}
												width={20}
												height={15}
											/>
										)}
									</div>
								</div>
							</label>

							{mode === 'registration' && (
								<label htmlFor="confirmPassword">
									<span className="max-sm:text-[14px] font-bold pl-1">
										Подтвердите пароль
									</span>
									<input
										id="confirmPassword"
										type="password"
										placeholder="Подтвердите пароль"
										className="w-full text-black max-2-[293px] text-[14px] authInput passwordInput pl-[57px]"
									/>
								</label>
							)}

							<Link
								href={''}
								className="w-max text-[#86BFEB] font-medium max-sm:text-[12px] underline pl-1 pt-1"
							>
								Забыли пароль?
							</Link>

							<div className="flex items-start gap-4 px-1">
								<input
									type="checkbox"
									defaultChecked
									className="mt-1 cursor-pointer"
								/>
								<p className="text-[12px] max-w-[237px] leading-tight">
									Нажимая кнопку, вы подтверждаете, что
									ознакомились и соглашаетесь с{' '}
									<Link
										href={''}
										className="underline"
									>
										Условиями Соглашения!
									</Link>{' '}
									Правилами и политикой конфиденциальности
									компании
								</p>
							</div>
						</div>

						<Button
							type="submit"
							value={
								mode === 'registration'
									? 'Зарегистрироваться'
									: 'Войти'
							}
							backgroundColor={ThemeButton.LIGHT}
						/>
					</form>
				</div>
			</motion.div>
		</div>
	);
};
