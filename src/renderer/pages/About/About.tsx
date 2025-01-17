import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="content">
        <h1>About This Template</h1>
        <p>
          A modern foundation for building cross-platform desktop applications.
        </p>

        <div className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-items">
            <div className="tech-item">
              <h3>Electron</h3>
              <p>Cross-platform desktop apps</p>
            </div>
            <div className="tech-item">
              <h3>React</h3>
              <p>UI development</p>
            </div>
            <div className="tech-item">
              <h3>TypeScript</h3>
              <p>Type-safe code</p>
            </div>
            <div className="tech-item">
              <h3>React Router</h3>
              <p>Navigation handling</p>
            </div>
          </div>
        </div>

        <div className="template-usage">
          <h2>Getting Started</h2>
          <p>
            Customize this template by modifying the components, styles, and
            adding your own features. The structure is designed to be clean and
            maintainable.
          </p>
        </div>
      </div>
    </div>
  );
}
