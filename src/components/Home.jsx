import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'

const Home=()=>{
return (
	<div className="home-container">
		<h1 className="title"> Welcome to Student Info System</h1>
		<Link to="/chat">
			<button className="enroll-btn">Enroll Now!</button>
		</Link>
	</div>
)
}

export default Home;
