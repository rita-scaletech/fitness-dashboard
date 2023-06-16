import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Lottie from 'react-lottie';

import { Profile } from 'shared/components/icons/icons';

import animationData from 'assets/animation/iconAnimation.json';
import UserDetails from 'features/dashboard/component/userDetails';

const Header = () => {
	const navigate = useNavigate();
	const [isProfile, setIsProfile] = useState(false);
	return (
		<div className='header-wrapper flex align-items--center justify-content--between'>
			<div onClick={() => navigate('/')} className='display-flex-center cursor--pointer'>
				<Lottie
					options={{ loop: true, autoplay: true, animationData: animationData }}
					height={100}
					width={100}
				/>
				<h5 className='font-size--34'>Fitness Tracker</h5>
			</div>
			<div>
				<div
					onClick={() => setIsProfile(true)}
					className='profile-wrapper display-flex-center border-radius--half cursor--pointer'
				>
					<Profile />
				</div>
			</div>
			{isProfile && <UserDetails handleClose={() => setIsProfile(false)} />}
		</div>
	);
};

export default Header;
