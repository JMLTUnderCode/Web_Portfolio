import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import GitHub_Metrics from './pages/GitHub_Metrics';
import Portfolio from './pages/Portfolio';

function App() {
  	return (
		<HashRouter>
			<main>
				<Header />
				<div className="main-content">
					<Navbar />
					<Routes>
						<Route path="/" element={<Navigate to="/about" replace />} />
						<Route path="/about" element={<About />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/github_metrics" element={<GitHub_Metrics />} />
						<Route path="/portfolio" element={<Portfolio />} />
					</Routes>
				</div>
			</main>
		</HashRouter>
	);
}

export default App;