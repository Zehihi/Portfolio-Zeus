import React from "react";
import "./StormButton.css";

function StormButton({ href = "#", children = "Button", className = "" }) {
	return (
		<a href={href} className={`storm-btn ${className}`}>
			<svg viewBox="0 0 100 100" width="24" height="24">
				<defs>
					<filter id="glow">
						<feGaussianBlur stdDeviation="3" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>
				<g filter="url(#glow)">
					<path
						d="M 50 15 L 60 40 L 50 50 L 70 75 L 30 75 L 40 50 L 30 40 Z"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
			<span>{children}</span>
			<div className="storm-spark spark-1" />
			<div className="storm-spark spark-2" />
			<div className="storm-spark spark-3" />
		</a>
	);
}

export default StormButton;
