import React from 'react';
import { useLocation } from 'react-router-dom';
import SlideInRightOnScroll from '../components/SlideInRightOnScroll';

//const BASE_URL = import.meta.env.BASE_URL;

const GitHub_Metrics: React.FC = () => {
	const location = useLocation();
	const isActive = location.pathname === '/github_metrics';
	return (
		<article className={`pages github_metrics${isActive ? ' active' : ''}`} data-page="github_metrics">
			<header>
				<SlideInRightOnScroll>
					<h2 className="h2 article-title">Github Metrics</h2>
				</SlideInRightOnScroll>
			</header>

			<div className="metrics">
				<div className="most_used_languages">
					<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JMLTUnderCode&langs_count=20&include_all_commits=true&count_private=true&layout=compact&hide_border=true&theme=neon" />
				</div>
				<div className="contributions"> 
					<img src="https://github-contributor-stats.vercel.app/api?username=JMLTUnderCode&limit=20&theme=neon&combine_all_yearly_contributions=true&hide_border=true"/>
				</div>
				<div className="trophies"> 
					<img src="https://github-profile-trophy.vercel.app/?username=JMLTUnderCode&theme=radical&no-frame=false&no-bg=true&margin-w=4" />
				</div>
				<div className="stats">
					<img src="https://github-readme-stats.vercel.app/api?username=JMLTUnderCode&include_all_commits=true&count_private=true&show_icons=true&line_height=20&theme=neon&hide_border=true" alt="my Github Stats"/>
				</div>
				<div className="streak">
					<img src="https://github-readme-streak-stats.herokuapp.com?user=JMLTUnderCode&theme=neon&hide_border=true"/>
				</div>
				<div className="contributions_graph"> 
					<img src="https://github-readme-activity-graph.vercel.app/graph?username=JMLTUnderCode&bg_color=0d1117&color=ffffff&line=00b3ff&point=f9fafa&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph" />
				</div>
			</div>
		</article>
	);
};

export default GitHub_Metrics;