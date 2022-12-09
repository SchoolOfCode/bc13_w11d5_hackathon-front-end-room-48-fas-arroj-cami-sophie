import React from "react";
import { useState } from "react";

export default function PostDisplay({ post, deletePost, updatePost }) {
	const [canEdit, setCanEdit] = useState(false);
	const [editLanguage, setEditLanguage] = useState("");
	const [editDuration, setEditDuration] = useState("");
	const [editPostText, setEditPostText] = useState("");


	function handleEdit(id) {
		if (canEdit === true) {
			updatePost(id, editLanguage, editDuration, editPostText);
			setCanEdit(false);
		} else {
			setCanEdit(true);
		}
	}

	return (
		<div>
			{post.map((currentItem) => {
				return (
					<div key={currentItem.id}>
						<p
							contentEditable={canEdit}
							onInput={(e) => setEditLanguage(e.currentTarget.textContent)}
						>
							{currentItem.post_language}
						</p>
						<p
							contentEditable={canEdit}
							onInput={(e) => setEditDuration(e.currentTarget.textContent)}
						>
							{currentItem.post_duration_weeks}
						</p>
						<p
							contentEditable={canEdit}
							onInput={(e) => setEditPostText(e.currentTarget.textContent)}
						>
							{currentItem.post_text}
						</p>
						<button
							onClick={() => {
								handleEdit(
									currentItem.id,
								);
							}}
						>
							Edit
						</button>
						<button
							onClick={() => {
								deletePost(currentItem.id);
							}}
						>
							Delete
						</button>
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
