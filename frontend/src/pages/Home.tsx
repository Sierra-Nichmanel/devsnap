import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className="flex items-center justify-center h-screen flex-col">
        {/* Home Page */}
        <h1 className="text-6xl font-bold mb-4">
          Dev<span className="text-green-600">Snap</span>
        </h1>
        <h2 className="text-xl text-black font-bold">
          Lightweight API Workspace for Developers
        </h2>
        <div className="flex flex-row items-center justify-between">
          <button className="mr-3 mt-4 bg-black text-green-400 px-4 py-2 rounded">
            <Link to="/signup">Sign Up</Link>
          </button>
          <button className="ml-3 mt-4 bg-black text-green-400 px-4 py-2 rounded">
            <Link to="/login">Login</Link>
          </button>
        </div>
            
        {/* Hero Section */}

            {/* Features */}
            
            {/* Why DevSnap */}
            
            {/* Screenshots */}
            
            {/* Testimonials */}
            
            {/* Pricing */}
            
            {/* FAQ */}
            
            {/* Footer */}
            
      </div>
    );
}
