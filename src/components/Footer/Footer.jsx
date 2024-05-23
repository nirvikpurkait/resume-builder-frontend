import React from "react";
import styles from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
	return (
		<div className={styles.footerbasic}>
			<footer>
				<div className={styles.social}>
					<SocialIcon url="https://twitter.com" />
					&nbsp; &nbsp;
					<SocialIcon url="https://snapchat.com" />
					&nbsp;&nbsp;
					<SocialIcon url="https://instagram.com" />
					&nbsp;&nbsp;
					<SocialIcon url="https://facebook.com" />
				</div>
				<ul className={styles.listinline}>
					<li className="list-inline-item">
						<a href="#">Home</a>
					</li>
					<li className="list-inline-item">
						<a href="#">Services</a>
					</li>
					<li className="list-inline-item">
						<a href="#">About</a>
					</li>
					<li className="list-inline-item">
						<a href="#">Terms</a>
					</li>
					<li className="list-inline-item">
						<a href="#">Privacy Policy</a>
					</li>
				</ul>
				<p className={styles.copyright}>UNO OFFICIAL © 2023</p>
			</footer>
		</div>
	);
}

export default Footer;
