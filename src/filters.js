import React from "react";

export default function Filters({ POSTS }) {
	// an array of objects that has the languages
	// an array of objects that has the duration in weeks
	// push these in as labels
	const arrLang = [{ label: "Language", id: 0 }];
	const createDropDownObjectLanguages = POSTS;
	createDropDownObjectLanguages.map((currentItem) => {
		return arrLang.push({
			label: currentItem.post_language,
			id: currentItem.id,
		});
	});

	const arrDuration = [{ label: "Duration", id: 0 }];
	const createDropDownObjectDuration = POSTS;
	createDropDownObjectDuration.map((currentItem) => {
		return arrDuration.push({
			label: currentItem.post_duration_week,
			id: currentItem.id,
		});
	});

	return (
		<div>
			<select>
				{arrLang.map((currentItem) => {
					return <option key={currentItem.id}>{currentItem.label}</option>;
				})}
			</select>
			<select>
				{arrDuration.map((currentItem) => {
					return <option key={currentItem.id}>{currentItem.label}</option>;
				})}
			</select>
		</div>
	);
}
