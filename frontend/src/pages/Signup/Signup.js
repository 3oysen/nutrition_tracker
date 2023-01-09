import RightPanel from "../../components/RightPanel";
import { useFormik } from "formik";

const Signup = () => {
	const formik = useFormik({
		initialValues: { name: "", email: "", password: "" },
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<>
			<div className="container">
				<div className="left-panel">
					<div className="login-section">
						<div className="login-header">
							<p className="lg">Welcome</p>
							<p className="details-description">Please enter your details.</p>
						</div>

						<form onSubmit={formik.handleSubmit} className="input-section">
							<h5>Name</h5>
							<input
								id="name"
								name="name"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.name}
								placeholder="Enter your name"
							/>
							<h5>Email</h5>
							<input
								id="email"
								name="email"
								type="email"
								onChange={formik.handleChange}
								value={formik.values.email}
								placeholder="Enter your email"
							/>

							<h5>Password</h5>
							<input
								id="password"
								name="password"
								type="password"
								onChange={formik.handleChange}
								value={formik.values.password}
								placeholder="Enter your password"
							/>

							<div className="sign-button-section">
								<button type="submit" class="sign-btn">
									<span>Sign up</span>
								</button>
								<button type="submit" class="sign-btn">
									<span>Sign up with Google</span>
								</button>
							</div>
						</form>

						<div className="unregistered-section">
							<p>Do you have an account?</p>
							<p className="sign-up-link">Sign in</p>
						</div>
					</div>
				</div>
				<RightPanel />
			</div>
		</>
	);
};

export default Signup;
