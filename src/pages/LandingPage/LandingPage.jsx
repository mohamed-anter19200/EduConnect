
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
          Welcome to EduConnect
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          EduConnect is a smart educational platform for Tanta University students. Access lectures, recorded sessions, and academic sections with ease.
        </p>
        <div className="space-x-4">
          <Link to="/login">
            <button className="btn">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
