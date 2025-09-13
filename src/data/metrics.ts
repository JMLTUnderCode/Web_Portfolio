import { BASE_URL } from '../constants';
import type { Metric } from '../types';

export const METRICS: Metric[] = [
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