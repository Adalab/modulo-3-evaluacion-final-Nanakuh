import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Harry Potter 
        </p>
        <nav className="footer-links">
          <NavLink to="./components/pages/privacy" className="footer-link">
            Política de privacidad
          </NavLink>
         {" | "}
          <p className="footer-link">Términos de servicio</p>
          <p className="footer-link">|</p>
          <p className="footer-link">Contacto</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;