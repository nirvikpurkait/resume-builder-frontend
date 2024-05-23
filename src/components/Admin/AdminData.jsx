import { Axios } from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseurl";

export default function AdminData() {
	const [users, setUsers] = useState([]);

	const showResume = (resumeUrl) => {
		const a = document.createElement("a");
		a.href = `${resumeUrl}`;
		a.click();
	};

	useEffect(() => {
		(async () => {
			const res = await Axios.get(`${baseUrl}/api/user-details`);

			console.log(res.data);
			setUsers(res.data);
		})();
	}, []);

	return (
		<>
			<table className="table table-hover w-75 m-auto">
				<thead className="">
					<tr>
						<th>Sl. no</th>
						<th>Username</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => {
						return (
							<tr key={user.id}>
								<td>{index + 1}</td>
								<td>{user.username}</td>
								<td>
									<button
										className="btn btn-primary"
										onClick={() => showResume(user.resumeUplodedLink)}
									>
										See Resume
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
