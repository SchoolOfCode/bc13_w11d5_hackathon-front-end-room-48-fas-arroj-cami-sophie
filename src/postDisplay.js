import React from "react";

export default function PostDisplay({ POSTS }) {
	return (
		<div>
			{POSTS.map((currentItem) => {
				return (
					<div key={currentItem.id}>
						<p>{currentItem.post_language}</p>
						<p>{currentItem.post_duration_weeks}</p>
						<p>{currentItem.post_text}</p>
					</div>
				);
			})}
		</div>
	);
}

// {
// 		id: 2,
// 		post_text: "Sample Text 2",
// 		post_language: "react",
// 		post_duration_weeks: 5,
// 	},
