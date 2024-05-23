import React, { useState } from "react";
import ResumeForm from "../ResumeDetails/ResumeForm";
import UploadResume from "../UploadResume/UploadResume";

export default function () {
	const [section, setSection] = useState("form");

	return (
		<h1>
			<div className="d-flex justify-content-evenly mb-10">
				<button
					className="btn btn-primary"
					onClick={() => {
						setSection("form");
					}}
				>
					Form
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						setSection("upload");
					}}
				>
					Upload resume
				</button>
			</div>

			{section === "form" && <ResumeForm />}
			{section === "upload" && <UploadResume />}
		</h1>
	);
}
