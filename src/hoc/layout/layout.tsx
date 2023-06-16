import { PropsWithChildren } from 'react';
import Header from 'hoc/header/header';

const Layout: React.FC<PropsWithChildren> = (props) => {
	return (
		<div id='wrapper'>
			<Header />
			<div id='page-wrapper' className='full--width'>
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
