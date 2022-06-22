import React from "react";
import Header from "./components/Header/Header";
import Note from "./components/Note/Note";
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
					<Note title={note.title} desc={note.about} color={note.color} />
				);
			})}
		</>
	);
};

export default App;
