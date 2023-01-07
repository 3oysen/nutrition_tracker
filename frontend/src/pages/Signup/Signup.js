function Signup() {
	return (
		<>
			<div className="container">
				<div className="left-panel">
					<div className="login-section">
						<div className="login-header">
							<p className="lg">Welcome</p>
							<p className="details-description">Please enter your details.</p>
						</div>

						<div className="input-section">
							<h5>Name</h5>
							<input type="email" placeholder="Enter your name" />
							<h5>Email</h5>
							<input type="email" placeholder="Enter your email" />
							<h5>Password</h5>
							<input type="password" placeholder="Enter your password" />
						</div>

						<div className="sign-button-section">
							<button type="submit" class="sign-btn">
								<span>Sign up</span>
							</button>
							<button type="submit" class="sign-btn">
								<span>Sign up with Google</span>
							</button>
						</div>

						<div className="unregistered-section">
							<p>Do you have an account?</p>
							<p className="sign-up-link">Sign in</p>
						</div>
					</div>
				</div>
				<div className="right-panel">right-panel</div>
			</div>
		</>
	);
}

export default Signup;
