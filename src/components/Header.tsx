import { Link } from 'react-router-dom';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="main-header-loading"></div>
      <header id="main-header">
        <div id="header-title">
          <h1>
            <Link to="/">React Events</Link>
          </h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
