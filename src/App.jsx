import React from "react";
import Header from "./components/Header/Header";
import notes, { fruits } from "./resources";
import "./style.css";

const App = () => {
	return (
		<>
			<Header />
			{fruits.map((fruit, index) => {
				return <span key={index}>{fruit}</span>;
			})}
			{notes.map((note, index) => {
				return (
					<div
						className="note"
						style={{ backgroundColor: note.color }}
						key={index}
					>
						<h2>{note.title}</h2>
						<p>{note.about}</p>
					</div>
				);
			})}
		</>
	);
};

export default App;
