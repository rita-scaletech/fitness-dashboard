import { useDispatch } from 'react-redux';
import * as actionTypes from 'store/actionTypes';

import { Walking } from 'shared/components/icons/icons';
import FitnessData from '../../json/fitnessData.json';
import { createAction } from 'shared/util/utility';
import { ActivityIconList } from '../constants/dashboard';
import { useState } from 'react';

const Dashboard = () => {
	const dispatch = useDispatch();

	const [progress, setProgress] = useState(0);

	const fitnessActivityList = FitnessData.activities;
	console.log('🚀 ~ file: dashboard.tsx:13 ~ Dashboard ~ fitnessActivityList:', fitnessActivityList);
	const userDetails = FitnessData.user;

	dispatch(createAction(actionTypes.USER_DATA, userDetails));

	const ActivityIcon: React.FC<{ activity: string }> = ({ activity }) => {
		const IconComponent = ActivityIconList[activity];

		if (!IconComponent) {
			return null; // Handle case when the activity name is not found
		}

		return <IconComponent />;
	};

	return (
		<div className='dashboard-wrapper'>
			<div className='activity-container'>
				{fitnessActivityList.map(({ name, duration }, index) => {
					const progress = (duration / 100) * 100;
					console.log('🚀 ~ file: dashboard.tsx:35 ~ {fitnessActivityList.map ~ duration:', progress);
					return (
						<div key={index} className='activity-wrapper width--30'>
							<div className='image-wrapper display-flex-center'>
								<ActivityIcon activity={name} key={index} />
							</div>
							<div className='text--center mt--20'>
								<p className='activity-name mb--10 font-size--xxl font--semi-bold'>{name}</p>
								<p className='duration'>{duration} min</p>
							</div>
							<div className='progress-bar position--relative'>
								<div
									style={{ width: `${duration > 100 ? '100' : duration}%` }}
									className='progress-fill position--absolute height--full'
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dashboard;
