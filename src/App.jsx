import React from "react";
import Header from "./components/Header/Header";
import { fruits } from "./resources";
import "./style.css";

const App = () => {
	return (
		<>
			<Header />
			{
        fruits.map(
          (fruit, index) => {
			  	  return <span key={index}>{fruit}</span>;
			    }
        )
      }
		</>
	);
};

export default App;
