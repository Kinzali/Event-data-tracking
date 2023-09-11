import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="flex items-center justify-between px-5 py-2">
    <div className="flex items-center gap-5">
      <Link to="/" className="py-1">Home</Link>
      <Link to="/docs" className="py-1">Documentation</Link>
    </div>
    <Link to="/login" className="py-1">Login</Link>
  </nav>
);

export default Navigation;
