import React, { useRef, useState } from "react";
import { Axios } from "../../utils/axios";
import { getCookie } from "../../utils/get-cookie";
import Spinner from "../Spinner/Spinner";
import { baseUrl } from "../../utils/baseurl";

export default function UploadResume() {
	const formRef = useRef(null);
	const [isUploading, setIsUploading] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(formRef.current);
		setIsUploading(true);
		const res = await Axios.post(`${baseUrl}/api/upload-resume`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				username: getCookie("username"),
			},
			method: "post",
		});

		setIsUploading(false);
	};

	if (isUploading) {
		return (
			<div className="d-flex justify-content-center">
				<Spinner />
			</div>
		);
	}

	return (
		<form
			className="d-flex flex-col m-auto border-5 w-50 px-4"
			onSubmit={(e) => onSubmit(e)}
			ref={formRef}
		>
			<input type="file" className="mt-4 mb-4" name="resume" />
			<button className="btn btn-primary mb-4 w-60 m-auto" type="submit">
				Upload Resume to review
			</button>
		</form>
	);
}
