function Login() {
	return (
		<>
			<div className="container">
				<div className="left-panel">
					<div className="login-section">
						<div className="login-header">
							<p className="lg">Welcome back</p>
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

						<div className="sign-button-section">
							<button type="submit" class="sign-btn">
								<span>Sign in</span>
							</button>
							<button type="submit" class="sign-btn">
								<span>Sign in with Google</span>
							</button>
						</div>

						<div className="unregistered-section">
							<p>Don't have an account?</p>
							<p className="sign-up-link">Sign up</p>
						</div>
					</div>
				</div>
				<div className="right-panel">right-panel</div>
			</div>
		</>
	);
}

export default Login;
