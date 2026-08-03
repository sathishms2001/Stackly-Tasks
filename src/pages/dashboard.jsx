import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const userName = localStorage.getItem("loggedInUser");

  const handleBackToLogin = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">

        <div className="dashboard-icon">
          ✓
        </div>

        <h1>
          Welcome {userName}! 👋
        </h1>

        <p className="dashboard-message">
          You have successfully logged in to your account.
        </p>

        <p className="dashboard-subtitle">
          This is your home dashboard.
        </p>

        <button
          className="back-login-button"
          onClick={handleBackToLogin}
        >
          Back to Login
        </button>

      </div>
    </div>
  );
}

export default Dashboard;