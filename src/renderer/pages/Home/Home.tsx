import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Welcome to Your App</h1>
        <p>
          This is a template for building Electron applications with React and
          TypeScript.
        </p>

        <div className="template-info">
          <h2>Template Features</h2>
          <ul>
            <li>Multi-page routing</li>
            <li>TypeScript support</li>
            <li>Component organization</li>
            <li>Global styles</li>
          </ul>
        </div>

        <div className="demo-section">
          <button type="button" className="demo-button">
            Example Button
          </button>
        </div>
      </div>
    </div>
  );
}
