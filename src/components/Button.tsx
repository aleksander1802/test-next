import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
	LIGHT = 'buttonLight',
	DARK = 'buttonDark',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	backgroundColor: ThemeButton;
}

export const Button = (props: IButton) => {
	const { backgroundColor, value } = props;

	return (
		<button
			className={`${backgroundColor} w-full h-[65px] max-w-[375px] text-white text-sm font-bold transition-all duration-300 hover:opacity-80`}
		>
			{value}
		</button>
	);
};
