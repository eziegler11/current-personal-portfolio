import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG1 from '../../assets/shoptillyoudrop.png';
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
		title: 'This is a portfolio item title',
		github: 'https://github.com',
		demo: 'https://github.com',
	},
	{
		id: 3,
		image: IMG3,
		title: 'This is a portfolio item title',
		github: 'https://github.com',
		demo: 'https://github.com',
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
