import IMG2 from '../../assets/birders.png';
import IMG3 from '../../assets/e-commerce.png';
import IMG1 from '../../assets/shoptillyoudrop.png';
import IMG4 from '../../assets/employee.png';
import './portfolio.css';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Shop Till You Drop // MERN Fullstack App',
		github: 'https://github.com/eziegler11/shop-till-you-drop',
		demo: 'https://ezshoptillyoudrop.website/',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Birders Anonymous // JavaScript + API',
		github: 'https://github.com/eziegler11/birders-anonymous',
		demo: 'https://nlewis742.github.io/birders-anonymous/',
	},
	{
		id: 3,
		image: IMG3,
		title: 'E-Commerce Backend CLI // Node.js + MySQL',
		github: 'https://github.com/eziegler11/back-end-ecommerce-CL-app',
		demo: 'https://drive.google.com/file/d/1cB0k1g5tyx9t_OlUcjqOYn0HVXdmYCdt/view',
	},
	{
		id: 4,
		image: IMG4,
		title: 'Employee Database // Node.js + MySQL',
		github: 'https://github.com/eziegler11/employee-database-tracker',
		demo: 'https://drive.google.com/file/d/1LwpK3Sfv1GN_VAtm6_8U5egM6DkrSfC5/view',
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className='portfolio__item-cta'>
								<a
									href={github}
									className='btn'
									target='_blank'
									rel='noreferrer'
								>
									Github
								</a>
								<a
									href={demo}
									className='btn btn-primary'
									target='_blank'
									rel='noreferrer'
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};
export default Portfolio;
