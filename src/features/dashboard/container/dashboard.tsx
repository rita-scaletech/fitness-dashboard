import { useDispatch } from 'react-redux';
import * as actionTypes from 'store/actionTypes';

import FitnessData from '../../json/fitnessData.json';
import { createAction } from 'shared/util/utility';
import { ActivityIconList } from '../constants/dashboard';

const Dashboard = () => {
	const dispatch = useDispatch();
	const fitnessActivityList = FitnessData.activities;
	const userDetails = FitnessData.user;

	dispatch(createAction(actionTypes.USER_DATA, userDetails));

	const ActivityIcon: React.FC<{ activity: string }> = ({ activity }) => {
		const IconComponent = ActivityIconList[activity];

		if (!IconComponent) {
			return null; // Handle case when the activity name is not found
		}

		return <IconComponent />;
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based
		const year = date.getFullYear().toString().slice(-2);
		return `${day}-${month}-${year}`;
	};

	return (
		<div className='dashboard-wrapper'>
			<div className='activity-container'>
				{fitnessActivityList.map(
					({ name, duration, date, distance, steps, heart_rate, calories_burned }: any, index) => {
						return (
							<div key={index} className='activity-wrapper width--30'>
								<div className='image-wrapper display-flex-center'>
									<ActivityIcon activity={name} key={index} />
								</div>
								<div>
									<p className='activity-title'>{formatDate(date)}</p>
								</div>
								<div className='mt--20'>
									<p className='text--center activity-name mb--10 font-size--xxl font--semi-bold'>
										{name}
									</p>
									<div className='mt--15'>
										<p className='activity-title'>Time : {duration} min</p>
										{distance && (
											<p className='activity-title'>
												Distance : <span>{distance} km</span>
											</p>
										)}
										{steps && (
											<p className='activity-title'>
												Steps : <span>{steps}steps</span>
											</p>
										)}
										{calories_burned && (
											<p className='activity-title'>
												Calories : <span>{calories_burned}kcal</span>
											</p>
										)}
										{heart_rate && (
											<>
												<p className='activity-title'>
													Average heart rate : {heart_rate.average} bpm
												</p>
												<p className='activity-title'>
													Maximum heart rate : {heart_rate.max} bpm
												</p>
											</>
										)}
									</div>
								</div>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export default Dashboard;
