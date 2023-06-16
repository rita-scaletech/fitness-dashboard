import { Walking } from 'shared/components/icons/icons';

const Dashboard = () => {
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
