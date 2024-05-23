import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import AdminData from "./components/Admin/AdminData";
import StudentData from "./components/StudentData/StudentData";

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginForm />}></Route>
					<Route path="/admin" element={<AdminData />}></Route>
					<Route path="/student" element={<StudentData />}></Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
