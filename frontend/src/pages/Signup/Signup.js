import RightPanel from "../../components/RightPanel";
import { useFormik } from "formik";

const validate = (values) => {
	const errors = {};
	if (!values.name) {
		errors.name = "Required";
	} else if (values.name.length > 15) {
		errors.name = "Must be 15 characters or less";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	if (!values.password) {
		errors.password = "Required";
	} else if (values.password.length < 8) {
		errors.password = "Must be 8 characters or more";
	}

	return errors;
};

const Signup = () => {
	const formik = useFormik({
		initialValues: { name: "", email: "", password: "" },
		validate,
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
								onBlur={formik.handleBlur}
								value={formik.values.name}
								placeholder="Enter your name"
							/>
							<div className="form-errors">
								{formik.touched.name && formik.errors.name ? (
									<div>{formik.errors.name}</div>
								) : null}
							</div>

							<h5>Email</h5>
							<input
								id="email"
								name="email"
								type="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								placeholder="Enter your email"
							/>
							<div className="form-errors">
								{formik.touched.email && formik.errors.email ? (
									<div>{formik.errors.email}</div>
								) : null}
							</div>

							<h5>Password</h5>
							<input
								id="password"
								name="password"
								type="password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
								placeholder="Enter your password"
							/>
							<div className="form-errors">
								{formik.touched.password && formik.errors.password ? (
									<div>{formik.errors.password}</div>
								) : null}
							</div>

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
