
import { Routes, Route, Link } from "react-router-dom";
// import ReactPlayer from "react-player"     // it will import the whole bundle 
import ReactPlayer from "react-player/youtube"   //it will import for the youtube video only

function App() {
	const vidUrl = "https://youtu.be/l0YwWMYgEUI"
  return (
    <div> 
	  <h1> Intro of channel .. COCO cameo</h1>
	  <ReactPlayer
	  url = {vidUrl}
	  playing = {false}
	  volume = {0.4} controls
	  
	  />

	   	<h4> React player example </h4>
    </div>
  );
};

export default App