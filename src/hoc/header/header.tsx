import Lottie from 'react-lottie';
import animationData from 'assets/animation/iconAnimation.json';
import { Profile } from 'shared/components/icons/icons';

const Header = () => {
	return (
		<div className='header-wrapper flex align-items--center justify-content--between'>
			<div className='display-flex-center'>
				<Lottie
					options={{ loop: true, autoplay: true, animationData: animationData }}
					height={100}
					width={100}
				/>
				<h5 className='font-size--34'>Fitness Tracker</h5>
			</div>
			<div>
				<div className='profile-wrapper display-flex-center border-radius--half'>
					<Profile />
				</div>
			</div>
		</div>
	);
};

export default Header;
