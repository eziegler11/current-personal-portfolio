import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageAltDetail } from 'react-icons/bi';
import { PiBriefcaseMetalDuotone } from 'react-icons/pi';
import './nav.css';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');

	return (
		<nav>
			<a
				href='#'
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			>
				<BiBook />
			</a>
			<a
				href='#portfolio'
				onClick={() => setActiveNav('#portfolio')}
				className={activeNav === '#portfolio' ? 'active' : ''}
			>
				<PiBriefcaseMetalDuotone />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<BiMessageAltDetail />
			</a>
		</nav>
	);
};
export default Nav;
