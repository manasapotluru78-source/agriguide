
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./Auth.css";

function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSignup = location.pathname === "/signup";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!supabase) {
      setError("Authentication is not connected yet. Configure Supabase first.");
      return;
    }

    setLoading(true);

    try {
      if (isSignup) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            },
            emailRedirectTo: window.location.origin,
          },
        });

        if (error) throw error;

        if (data.session) {
          navigate("/");
        } else {
          setMessage("Account created! Please check your email to verify your account.");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-logo">
          🌱 AgriGuide
        </Link>

        <div className="auth-heading">
          <h1>
            {isSignup ? "Create Your Account" : "Welcome Back!"}
          </h1>

          <p>
            {isSignup
              ? "Join AgriGuide and explore smarter farming."
              : "Login to continue your agricultural journey."}
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {isSignup && (
            <div className="auth-field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="auth-field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
          </div>

          {!isSignup && (
            <div className="forgot-password">
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
          )}

          {error && (
            <p className="auth-error">{error}</p>
          )}

          {message && (
            <p className="auth-success">{message}</p>
          )}

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isSignup
                ? "Create Account"
                : "Login"}
          </button>

        </form>

        <div className="auth-switch">
          {isSignup ? (
            <>
              Already have an account?
              <Link to="/login"> Login</Link>
            </>
          ) : (
            <>
              Don't have an account?
              <Link to="/signup"> Create Account</Link>
            </>
          )}
        </div>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default AuthPage;
