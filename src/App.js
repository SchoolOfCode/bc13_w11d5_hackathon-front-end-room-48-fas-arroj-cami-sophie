import "./App.css";
import NavBar from "./navBar";
import PostField from "./postField";
import Filters from "./filters";
import PostDisplay from "./postDisplay";

const POSTS = [
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
];

function App() {
	return (
		<div className='App'>
			<NavBar></NavBar>
			<PostField></PostField>
			<Filters POSTS={POSTS}></Filters>
			<PostDisplay POSTS={POSTS}></PostDisplay>
		</div>
	);
}

export default App;
