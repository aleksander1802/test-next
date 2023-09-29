import { Button, ThemeButton } from '@/components/Button';
import { LoginSignInPopup, Mode } from '@/components/Popup';
import { useState } from 'react';

const Home = () => {
	const [popupMode, setPopupMode] = useState<Mode | null>(null);

	const openPopup = (mode: Mode) => {
		setPopupMode(mode);
	};

	const closePopup = () => {
		setPopupMode(null); 
	  };

	return (
		<div className="w-full h-full flex flex-col">
			<h2 className="h2 pt-16 mx-[3px] mb-20">Выберите действие</h2>

			<div className="flex flex-col gap-5 items-center">
				<Button
					type="button"
					value={'Login'}
					backgroundColor={ThemeButton.LIGHT}
					onClick={() => openPopup('login')} 
				/>

				<Button
					type="button"
					value={'Registration'}
					backgroundColor={ThemeButton.DARK}
					onClick={() => openPopup('registration')}
				/>
			</div>
			{popupMode && <LoginSignInPopup mode={popupMode} onClose={closePopup} />}
		</div>
	);
};

export default Home;
