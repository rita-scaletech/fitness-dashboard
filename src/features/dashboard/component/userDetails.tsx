import { FC } from 'react';
import { useSelector } from 'react-redux';

import { IState } from 'shared/interface/state';
import CustomModal from 'shared/modal/modal';
import MyProfile from 'assets/images/avatar.png';

interface IProfileProps {
	handleClose: () => void;
}

const UserDetails: FC<IProfileProps> = ({ handleClose }) => {
	const userDetails = useSelector((state: IState) => state.auth.userDetails);
	const { age, email, height, name, weight } = userDetails;

	return (
		<CustomModal show={true} handleClose={handleClose} className='profile-modal'>
			<h5 className='text--center'>Personal Details</h5>
			<div className='profile--wrapper'>
				<div className='text--center'>
					<img className='profile-image border-radius--half' src={MyProfile} alt='profile' />
				</div>
				<div className='flex'>
					<p>Name : </p>
					<p className='ml--5'>{name}</p>
				</div>
				<div className='flex'>
					<p>Email : </p>
					<p className='ml--5'>{email}</p>
				</div>
				<div className='flex'>
					<p>Height : </p>
					<p className='ml--5'>{height}</p>
				</div>
				<div className='flex'>
					<p>Weight : </p>
					<p className='ml--5'>{weight}</p>
				</div>
				<div className='flex'>
					<p>Age : </p>
					<p className='ml--5'>{age}</p>
				</div>
			</div>
		</CustomModal>
	);
};

export default UserDetails;
