import React, { useRef, useEffect, useState } from 'react';

interface SlideInRightOnScrollProps {
	children: React.ReactNode;
	className?: string;
}

const SlideInRightOnScroll: React.FC<SlideInRightOnScrollProps> = ({ children, className = '' }) => {
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
			className={`${className} animated-on-scroll${hasAnimated ? ' animate__animated animate__slideInRight' : ''}`}
		>
			{children}
		</div>
	);
};

export default SlideInRightOnScroll;