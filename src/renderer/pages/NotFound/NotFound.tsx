import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button type="button" onClick={() => navigate(ROUTES.HOME)}>
        Return Home
      </button>
    </div>
  );
}
