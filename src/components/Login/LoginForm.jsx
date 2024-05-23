import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/baseurl";
import { Axios } from "../../utils/axios";
import Spinner from "../Spinner/Spinner";

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("STUDENT");
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (username.length === 0) return;
		if (password.length === 0) return;
		if (role === "select role") return;

		const data = {
			username,
			password,
			role,
		};

		setIsLoading(true);
		const res = await Axios.post(`${baseUrl}/api/login`, data, {
			method: "POST",
		});
		setIsLoading(false);

		navigate(res.data.navigateTo);
	};

	if (isLoading) {
		return (
			<div className="d-flex justify-content-center">
				<Spinner />
			</div>
		);
	}

	return (
		<form className="border p-4 rounded border-5 w-25 m-auto">
			<label htmlFor="username">Username:</label>
			<div className="input-group mb-3">
				<input
					id="username"
					type="text"
					className="form-control"
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon"
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>

			<label htmlFor="password">Password:</label>
			<div className="input-group mb-3">
				<input
					id="password"
					type="password"
					className="form-control"
					placeholder="Password"
					aria-label="Password"
					aria-describedby="basic-addon"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<label htmlFor="role">Role:</label>
			<select
				className="form-select"
				aria-label="Default select example"
				onChange={(e) => setRole(e.target.value)}
			>
				<option value="select role">-- select role --</option>
				<option value="ADMIN">Admin</option>
				<option value="STUDENT">Student</option>
			</select>

			<button
				className="btn btn-primary mt-4"
				onClick={(e) => handleSubmit(e)}
				type="submit"
			>
				Log-in
			</button>
		</form>
	);
}
