import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {

	const cardInfo = [
		{imgUrl: "https://picsum.photos/id/227/500/325", 
		title: "Card title",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut esse officia quidem perferendis debitis minus asperiores expedita pariatur id aliquam tempore unde sapiente, ducimus provident nulla, quasi facilis animi laboriosam!",
		buttonText: "Find out more!"
	},
	{imgUrl: "https://picsum.photos/id/236/500/325", 
		title: "Card title",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut esse officia quidem perferendis debitis minus asperiores expedita pariatur id aliquam tempore unde sapiente, ducimus provident nulla, quasi facilis animi laboriosam!",
		buttonText: "Find out more!"
	},
	{imgUrl: "https://picsum.photos/id/235/500/325", 
		title: "Card title",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut esse officia quidem perferendis debitis minus asperiores expedita pariatur id aliquam tempore unde sapiente, ducimus provident nulla, quasi facilis animi laboriosam!",
		buttonText: "Find out more!"
	},
	{imgUrl: "https://picsum.photos/id/234/500/325", 
		title: "Card title",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut esse officia quidem perferendis debitis minus asperiores expedita pariatur id aliquam tempore unde sapiente, ducimus provident nulla, quasi facilis animi laboriosam!",
		buttonText: "Find out more!"
	}
	];

	return (
		<>
			<Navbar />
			<div className="container">
			<Jumbotron />
			</div>
			<div className="container">
				<div className="row d-flex justify-content-between ">
					{cardInfo.map(card=>{
						return (
							<div className="col-sm-12 col-md-6 col-lg-3" ><Card imgUrl={card.imgUrl} title={card.title} text={card.text} buttonText={card.buttonText}/></div>
						)
					})}

					
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
