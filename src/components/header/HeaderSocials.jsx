import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a
				href='https://linkedin.com/in/erichziegler'
				target='_blank'
				rel='noreferrer'
			>
				<BsLinkedin />
			</a>
			<a href='https://github.com/eziegler11' target='_blank' rel='noreferrer'>
				<FaGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
