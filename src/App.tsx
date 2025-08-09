import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import GitHub_Metrics from './pages/GitHub_Metrics';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';

function App() {
  	return (
		<HashRouter>
			<ScrollToTop />
			<main>
				<Header />
				<div className="main-content">
					<Navbar />
					<Routes>
						<Route path="/" element={<Navigate to="/about" replace />} />
						<Route path="/about" element={<About />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/github_metrics" element={<GitHub_Metrics />} />
						<Route path="/projects" element={<Projects />} />
					</Routes>
				</div>
			</main>
		</HashRouter>
	);
}

export default App;