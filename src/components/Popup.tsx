import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { Button, ThemeButton } from './Button';
import Image from 'next/image';

export const LoginSignInPopup = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [passwordType, setPasswordType] = useState('password');

	const changePassworVisibility = () => {
		setPasswordVisibility(!passwordVisibility);

		passwordType === 'password'
			? setPasswordType('text')
			: setPasswordType('password');
	};

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const response = await fetch('/api/submit', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();
	}

	return (
		<div className="z-40 fixed w-full h-full bg-black/80 top-0 left-0 ">
			<div className="mt-11 mx-auto max-w-[375px] min-h-[594px]  pt-6 px-4 purpleGradient popupRadius mix-blend-screen">
				<div className="absolute bg-logo w-full h-full bg-no-repeat cover mix-blend-screen px-2 "></div>
				<div className="text-white px-1  relative">
					<h2 className="h2 text-2xl text-center pt-[30px]">Логин</h2>

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
										onClick={changePassworVisibility}
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

						<div className="">
							<Button
								type="submit"
								value="Войти"
								backgroundColor={ThemeButton.LIGHT}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
