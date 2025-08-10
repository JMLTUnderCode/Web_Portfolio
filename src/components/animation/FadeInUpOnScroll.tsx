import React, { useRef, useEffect, useState } from 'react';

interface FadeInUpOnScrollProps {
	children: React.ReactNode;
	className?: string;
}

const FadeInUpOnScroll: React.FC<FadeInUpOnScrollProps> = ({ children, className = '' }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					setHasAnimated(true);
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, [hasAnimated]);

	return (
		<div
			ref={ref}
			className={`${className} animated-on-scroll ${hasAnimated ? 'animate__animated animate__fadeInUp' : ''}`}
		>
			{children}
		</div>
	);
};

export default FadeInUpOnScroll;