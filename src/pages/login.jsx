import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Clear success message
    setSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    // -----------------------------
    // 1. Required field validation
    // -----------------------------

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    // -----------------------------
    // 2. Email format validation
    // -----------------------------

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email =
        "Please enter a valid email address";
    }

    // If validation errors exist, stop here
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // -----------------------------
    // 3. Get users from localStorage
    // -----------------------------

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // -----------------------------
    // 4. Check whether email exists
    // -----------------------------

    const user = users.find(
      (user) =>
        user.email.toLowerCase() ===
        formData.email.trim().toLowerCase()
    );

    if (!user) {
      setErrors({
        email: "User not found. Please sign up first",
      });

      return;
    }

    // -----------------------------
    // 5. Check password
    // -----------------------------

    if (user.password !== formData.password) {
      setErrors({
        password: "Incorrect password. Please try again",
      });

      return;
    }

    // -----------------------------
    // 6. Login successful
    // -----------------------------

    localStorage.setItem("loggedInUser", user.name);

    setSuccessMessage("Login successful!");

    console.log("Login successful:", user);
    
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
    console.log("Login successful:", user);

    // Clear form
    setFormData({
      email: "",
      password: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    // Dashboard navigation will be added next
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Header */}
        <div className="login-header">
          <h1>Welcome Back</h1>

          <p>
            Login to your account
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address{" "}
              <span className="required">*</span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {errors.email && (
              <p className="error-message">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">
              Password{" "}
              <span className="required">*</span>
            </label>

            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

            {errors.password && (
              <p className="error-message">
                {errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        {/* Signup Section */}
        <div className="signup-section">
          <span>
            Don't have an account?
          </span>

          <button
            type="button"
            className="signup-link"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;