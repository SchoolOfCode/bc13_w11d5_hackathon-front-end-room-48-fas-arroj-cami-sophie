import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./navBar";
import PostField from "./postField";
import Filters from "./filters";
import PostDisplay from "./postDisplay";

/*const POSTS = [
	{
		id: 1,
		post_text: "Sample Text 1",
		post_language: "python",
		post_duration_weeks: 2,
	},
	{
		id: 2,
		post_text: "Sample Text 2",
		post_language: "react",
		post_duration_weeks: 5,
	},
	{
		id: 3,
		post_text: "Sample Text 3",
		post_language: "vanilla JS",
		post_duration_weeks: 20,
	},
	{
		id: 4,
		post_text: "Sample Text 4",
		post_language: "matlab",
		post_duration_weeks: 7,
	},
];*/

function App() {
	const [post, setPost] = useState([]);
	const url = process.env.REACT_APP_BACKEND_URL;
	//console.log(url);

	useEffect(() => {
		async function getAllPosts() {
			const response = await fetch(`${url}/api/posts`);
			const data = await response.json();
			//console.log(data);
			setPost(data.payload);
		}
		getAllPosts();
	}, []);

	function createPost(text, language, weeks) {
		let i = 7;
		const newPost = [
			{
				id: i,
				post_text: text,
				post_language: language,
				post_duration_weeks: +weeks,
			},
		];
		setPost([...post, ...newPost]);
		i++;
	}

	async function deletePost(id) {
		await fetch(`${url}/api/posts/${id}`, {
			method: "DELETE",
		});
		const response = await fetch(`${url}/api/posts`);
		const data = await response.json();
		console.log(data);
		setPost(data.payload);
	}

  function updatePost(id, language, duration, posttext){
    fetch(`${url}/api/posts/${id}`, {
			method: "PATCH",
		});
    const response = fetch(`${url}/api/posts`);
		const data = response.json();
		console.log(data);
		setPost(data.payload);
  }

	return (
		<div className='App'>
			<NavBar></NavBar>
			<PostField createPost={createPost}></PostField>
			<Filters post={post}></Filters>
			<PostDisplay post={post} deletePost={deletePost} updatePost={updatePost}></PostDisplay>
		</div>
	);
}

export default App;
