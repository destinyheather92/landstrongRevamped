import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ThemeSwitcher from "../theme/ThemeSwitcher";

export default function Layout() {
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* Temporary palette comparison — delete this line to return to the current styling. */}
      <ThemeSwitcher />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
