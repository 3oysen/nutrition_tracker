import React from "react";
import "./Login.sass";

function Login() {
	return (
		<>
			<div className="container">
				<div className="left-panel">
					<div className="login-section">
						<div className="login-header">
							<h2>Welcome back</h2>
							<p className="details-description">
								Welcome back! Please enter your details.
							</p>
						</div>

						<div className="input-section">
							<h5>Email</h5>
							<input type="email" placeholder="Enter your email" />
							<h5>Password</h5>
							<input type="password" placeholder="Enter your password" />
						</div>

						<div className="forgot-section">
							<h5>Forgot password?</h5>
						</div>

						<div className="sing-button-section">
							<div className="sing-btn">Sing in</div>
							<div className="sing-btn">Sing in with Google</div>
						</div>

						<div className="unregistered-section">
							<p>Don't have an account?</p>
							<p className="sing-up-link">Sing up</p>
						</div>
					</div>
				</div>
				<div className="right-panel">right-panel</div>
			</div>
		</>
	);
}

export default Login;
