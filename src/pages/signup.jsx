import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear success message when user edits the form
    setSuccessMessage("");

    // Clear current field error
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Confirm password live validation
    if (name === "confirmPassword") {
      if (value && value !== formData.password) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords do not match",
        }));
      }
    }

    // Re-check confirm password when password changes
    if (name === "password") {
      if (
        formData.confirmPassword &&
        formData.confirmPassword !== value
      ) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords do not match",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "",
        }));
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    // --------------------------------
    // 1. Required field validation
    // --------------------------------

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Confirm password is required";
    }

    // --------------------------------
    // 2. Email format validation
    // --------------------------------

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email =
        "Please enter a valid email address";
    }

    // --------------------------------
    // 3. Password minimum length
    // --------------------------------

    if (
      formData.password &&
      formData.password.length < 6
    ) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    // --------------------------------
    // 4. Confirm password matching
    // --------------------------------

    if (
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    // Stop if validation fails
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // --------------------------------
    // Store user in localStorage
    // --------------------------------

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    existingUsers.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(existingUsers)
    );

    // --------------------------------
    // Show success message
    // --------------------------------

    setSuccessMessage("Account successfully created!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    // Clear form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        {/* Header */}
        <div className="signup-header">
          <h1>Create Account</h1>

          <p>
            Create your account to get started
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="name">
              Full Name{" "}
              <span className="required">*</span>
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            {errors.name && (
              <p className="error-message">
                {errors.name}
              </p>
            )}
          </div>

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

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password{" "}
              <span className="required">*</span>
            </label>

            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />

            {errors.confirmPassword && (
              <p className="error-message">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="signup-button"
          >
            Create Account
          </button>

        </form>

        {/* Login Section */}
        <div className="login-section">
          <span>Already have an account?</span>

          <button
        type="button"
        className="login-link"
        onClick={() => navigate("/login")}
        >
        Login
        </button>
        </div>

      </div>
    </div>
  );
}

export default Signup;