import axios from "axios";
import { baseUrl } from "./baseurl";

const Axios = axios.create({
	withCredentials: true,
	baseURL: baseUrl,
});

export { Axios };
