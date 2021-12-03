import React, { useState } from "react";

//Traffic-light component
const TrafficLight = () => {
	//Hooks
	const [color, setColor] = useState("red");

	return (
		<div className="traffic-lights d-flex flex-column align-items-center justify-content-center">
			<div className="main-container d-flex flex-column align-items-center justify-content-center">
				<div
					onClick={() => setColor("red")}
					className={
						"my-2 light red" + (color === "red" ? " glow-red" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"my-2 light yellow" +
						(color === "yellow" ? " glow-yellow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"my-2 light green" +
						(color === "green" ? " glow-green" : "")
					}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
