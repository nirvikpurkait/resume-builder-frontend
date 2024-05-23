const getCookie = (cookieName) => {
	const cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		if (cookies[i].split("=")[0] === cookieName) {
			return cookies[i].split("=")[1];
		}
	}
	return null;
};

export { getCookie };
