import { useDispatch } from 'react-redux';
import * as actionTypes from 'store/actionTypes';

import { Walking } from 'shared/components/icons/icons';
import FitnessData from '../../json/fitnessData.json';
import { createAction } from 'shared/util/utility';

const Dashboard = () => {
	const dispatch = useDispatch();

	const fitnessActivityList = FitnessData.activities;
	const userDetails = FitnessData.user;

	dispatch(createAction(actionTypes.USER_DATA, userDetails));

	return (
		<div className='dashboard-wrapper'>
			<div className='activity-container'>
				<div className='activity-wrapper'>
					<Walking />
					<div>
						<p>Running</p>
						<p>12 km</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
