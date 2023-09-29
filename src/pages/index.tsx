import { Button, ThemeButton } from '@/components/Button';
import { LoginSignInPopup } from '@/components/Popup';

const Home = () => {
	return (
		<div className="w-full h-full flex flex-col">
			<h2 className="h2 pt-16 mx-[3px] mb-20">Выберите действие</h2>

			<div className="flex flex-col gap-5 items-center">
				<Button
					type="button"
					value={'Login'}
					backgroundColor={ThemeButton.LIGHT}
				/>

				<Button
					type="button"
					value={'Registration'}
					backgroundColor={ThemeButton.DARK}
				/>
			</div>
			<LoginSignInPopup />
		</div>
	);
};

export default Home;
