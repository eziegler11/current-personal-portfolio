import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				{/* <div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='portfolio headshot' />
					</div>
				</div> */}

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>1+ Years Working</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Collaboration</h5>
							<small>5+ Group Projects</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>30+ Completed</small>
						</article>
					</div>

					<p>
						In the dynamic world of real estate, Erich Ziegler has established a
						reputation for being genuine, communicative, and exceptionally
						personable. A true native of Colorado, Erich's journey has now led
						him to explore the realm of technology as a full-stack developer,
						blending his exceptional people skills with his innovative mindset.
						<br></br>
						<br></br>
						Erich's roots run deep in the Centennial State, and his knack for
						fostering relationships comes naturally. His background spans
						diverse fields, encompassing finance and technology, allowing him to
						bring a fresh and unique perspective to any challenge. With a proven
						track record, Erich's ability to devise creative solutions has
						consistently propelled his clients toward success.<br></br>
						<br></br>During his tenure as a broker, Erich's commitment to
						building genuine connections propelled him to an impressive average
						of one sale per month in his second year. His success can be
						attributed not only to his tech-savviness, but also to his
						dedication to cultivating meaningful relationships that surpass
						industry norms. A blend of laid-back charm and unwavering
						determination makes Erich a perfect fit for discerning luxury
						homebuyers and sellers seeking a personal touch.<br></br>
						<br></br>Erich's proficiency in understanding market trends and
						adeptness in contract negotiations, coupled with his exceptional
						communication skills and meticulous attention to detail, make him a
						well-rounded professional. Now, equipped with a fresh perspective
						and a drive to master the world of full-stack development, Erich is
						poised to confidently navigate the complexities of software
						development with confidence.<br></br>
						<br></br>Beyond his professional pursuits, Erich's personal passions
						mirror his deep connection to Colorado. When he's not honing his
						tech skills, Erich can be found embarking on outdoor adventures.
						Whether it's conquering mountain trails on his bike, scaling rock
						faces, or camping beneath the stars, Erich's love for the outdoors
						is palpable. His loyal companion, Elke, the ever-present canine
						sidekick, shares in these escapades.<br></br>
						<br></br>Erich Ziegler: a true Colorado native, a dedicated Realtor
						turned aspiring full-stack developer, and an unwavering enthusiast
						of both human connections and technological innovation.
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};
export default About;
