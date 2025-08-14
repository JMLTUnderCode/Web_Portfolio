import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoEyeOutline, IoClose } from 'react-icons/io5';
import SlideInRightOnScroll from '../components/animation/SlideInRightOnScroll';
import FadeInUpOnScroll from '../components/animation/FadeInUpOnScroll';
import ZoomInUp from '../components/animation/BackInDown';
import ZoomOutDown from '../components/animation/BackOutDown';

// Uso de la animación de carga proviniente de LDRS.
import { Trefoil } from 'ldrs/react'
import 'ldrs/react/Trefoil.css'

const BASE_URL = import.meta.env.BASE_URL;

type Metric = {
	title: string,
	img: string,
	url: string,
	description: string,
};

const metrics: Metric[] = [
	{
		title: "Most Used Languages",
		img: `${BASE_URL}assets/images/metrics/metric-most-used-language.png`, 
		url: "https://github-readme-stats.vercel.app/api/top-langs/?username=JMLTUnderCode&langs_count=20&include_all_commits=true&count_private=true&layout=compact&hide_border=true&theme=neon",
		description: "A list of the most used programming languages in the user's GitHub repositories."

	},
	{
		title: "Trophies",
		img: `${BASE_URL}assets/images/metrics/metric-trophies.png`, 
		url: "https://github-profile-trophy.vercel.app/?username=JMLTUnderCode&theme=radical&no-frame=false&margin-w=4&column=4&theme=dark_lover&margin-w=15&margin-h=15",
		description: "A collection of trophies earned by the user for various achievements on GitHub."
	},
	{
		title: "Stats",
		img: `${BASE_URL}assets/images/metrics/metric-stats.png`,
		url: "https://github-readme-stats.vercel.app/api?username=JMLTUnderCode&include_all_commits=true&count_private=true&show_icons=true&line_height=20&theme=neon&hide_border=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage" ,
		description: "A summary of the user's GitHub statistics, including contributions, pull requests, and more."
	},
	{
		title: "Streak",
		img: `${BASE_URL}assets/images/metrics/metric-streak.png`,
		url: "https://github-readme-streak-stats.herokuapp.com?user=JMLTUnderCode&theme=neon&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&mode=weekly",
		description: "A representation of the user's GitHub contribution streak over time."
	},
	{
		title: "Contributions",
		img: `${BASE_URL}assets/images/metrics/metric-contributions.png`,
		url: "https://github-contributor-stats.vercel.app/api?username=JMLTUnderCode&limit=20&theme=neon&combine_all_yearly_contributions=true&hide_border=true&order_by=contributions",
		description: "A list of the contributions made by the user across all repositories."
	},
	{
		title: "Contributions Graph",
		img: `${BASE_URL}assets/images/metrics/metric-contributions-graph.png`,
		url: "https://github-readme-activity-graph.vercel.app/graph?username=JMLTUnderCode&theme=chartreuse-dark&hide_border=true&days=15",
		description: "A visual representation of the user's GitHub activity over the past 15 days."
	},
];

const GitHub_Metrics: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/github_metrics';
	const [modalUrl, setModalUrl] = useState<string | null>(null);
	const [isClosing, setIsClosing] = useState(false);
	const [imgLoaded, setImgLoaded] = useState(false);
	const [loadedImages, setLoadedImages] = useState<{ [title: string]: boolean }>({});

	const handleOpenModal = (url: string) => {
		setModalUrl(url);
		setIsClosing(false);
		setImgLoaded(false);
		document.body.style.overflow = 'hidden';
	};

	const handleCloseModal = () => {
		setIsClosing(true);
		setTimeout(() => {
			setModalUrl(null);
			setIsClosing(false);
			setImgLoaded(false);
			document.body.style.overflow = '';
		}, 500); // Duración de ZoomOutDown
	};

	return (
		<article className={`pages github_metrics${isActive ? ' active' : ''}`} data-page="github_metrics">
			<header>
				<SlideInRightOnScroll>
					<h2 className="h2 article-title">Github Metrics</h2>
				</SlideInRightOnScroll>
			</header>
			<section className="projects">
				<ul className="project-list">
					{metrics.map((metric) => (
						<FadeInUpOnScroll key={metric.title}>
							<li className="project-item active">
								<a
									type="button"
									className="metric-open-btn"
									onClick={() => handleOpenModal(metric.url)}
									title={`Ver ${metric.title}`}
								>
									<h3 className="metric-title">{metric.title}</h3>
									<figure className="project-img">
									    <div className="project-item-icon-box">
									        <IoEyeOutline />
									    </div>
									    {!loadedImages[metric.title] && (
									        <div className="metric-img-loader">
									            <Trefoil
									                size="50"
									                stroke="5"
									                strokeLength="0.15"
									                bgOpacity="0.1"
									                speed="1.4"
									                color="var(--vegas-gold)"
									            />
									        </div>
									    )}
									    <img
									        src={metric.img}
									        loading="lazy"
									        alt={metric.title}
											className={`metric-img${loadedImages[metric.title] ? ' show' : ''}`}
									        onLoad={() => setLoadedImages(prev => ({ ...prev, [metric.title]: true }))}
									    />
									</figure>
								</a>
							</li>
						</FadeInUpOnScroll>
					))}
				</ul>
			</section>
			{modalUrl && (
				<div className="metric-modal-overlay" onClick={handleCloseModal}>
					{isClosing ? (
						<ZoomOutDown>
							<div className="metric-modal" onClick={e => e.stopPropagation()}>
								<button className="metric-modal-close" onClick={handleCloseModal} title="Cerrar">
									<IoClose size={20} />
								</button>
								{!imgLoaded && (
									<div className="metric-modal-loader">
										<Trefoil
											size="50"
											stroke="5"
											strokeLength="0.15"
											bgOpacity="0.1"
											speed="1.4"
											color="var(--vegas-gold)"
										/>
									</div>
								)}
								<img
									className={`metric-modal-img${imgLoaded ? ' show' : ''}`}
									src={modalUrl}
									alt="Metric Modal"
									style={{ display: imgLoaded ? 'block' : 'none' }}
									onLoad={() => setImgLoaded(true)}
								/>
							</div>
						</ZoomOutDown>
					) : (
						<ZoomInUp>
							<div className="metric-modal" onClick={e => e.stopPropagation()}>
								<button className="metric-modal-close" onClick={handleCloseModal} title="Cerrar">
									<IoClose size={20} />
								</button>
								{!imgLoaded && (
									<div className="metric-modal-loader">
										<Trefoil
											size="50"
											stroke="5"
											strokeLength="0.15"
											bgOpacity="0.1"
											speed="1.4"
											color="var(--vegas-gold)"
										/>
									</div>
								)}
								<img
									className={`metric-modal-img${imgLoaded ? ' show' : ''}`}
									src={modalUrl}
									alt="Metric Modal"
									style={{ display: imgLoaded ? 'block' : 'none' }}
									onLoad={() => setImgLoaded(true)}
								/>
							</div>
						</ZoomInUp>
					)}
				</div>
			)}
		</article>
	);
};

export default GitHub_Metrics;