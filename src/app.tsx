import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { IState } from 'shared/interface/state';
import Layout from 'hoc/layout/layout';
import Dashboard from 'features/dashboard/container/dashboard';

const App: React.FC = () => {
	const isLogin: boolean = useSelector((state: IState) => state.auth.isLogin);

	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Dashboard />} />
			</Routes>
		</Layout>
	);
};

export default App;
