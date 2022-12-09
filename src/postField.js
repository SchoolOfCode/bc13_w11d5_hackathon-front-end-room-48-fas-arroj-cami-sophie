import React from "react";
import { useState } from "react";

export default function PostField({ createPost }) {
	const [postContent, setPostContent] = useState("");
	const [language, setLanguage] = useState("");
	const [duration, setDuration] = useState(0);

	function handleClick() {
		createPost(postContent, language, duration);
	}
	/*
Create useStates for all three inputs -> empty strings
createPost function in app.js and prop it into postfield
Have this function onClick -> handleClick -> createPost pass in the three states as an argument and reset the states
*/
	return (
		<div>
			<input
				placeholder='language'
				onChange={(e) => {
					setLanguage(e.target.value);
				}}
			></input>
			<input
				placeholder='duration'
				onChange={(e) => {
					setDuration(e.target.value);
				}}
			></input>
			<input
				placeholder='postcontent'
				onChange={(e) => {
					setPostContent(e.target.value);
				}}
			></input>
			<button onClick={handleClick}>Submit</button>
		</div>
	);
}
