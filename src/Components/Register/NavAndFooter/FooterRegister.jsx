import React from "react";
import style from "./FooterRegister.module.css";

const FooterRegister = () => {
	return (
			<div className={style.FooterRegisterDiv}>
				<ul className={style.FooterRegisterUl}>
					<li>
						<span>About Us</span> |
					</li>
					<li>
						<span>Contact Us</span> |
					</li>
					<li>
						<span>FAQs</span> |
					</li>
					<li>
						<span>Terms and Conditions</span> |
					</li>
					<li>
						<span>Report a Problem </span> |
					</li>
					<li>
						<span>Privacy Policy</span>
					</li>
				</ul>
        <p>All rights reserved © 2022 Info Edge India Ltd.</p>
			</div>
	);
};

export default FooterRegister;