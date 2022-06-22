import React from "react";
import Header from "./components/Header/Header";
import "./style.css";

const App = () => {
	let fruits = ["Mango", "Apple", "Banana"];
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
