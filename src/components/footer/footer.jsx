import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Howarts members</p>
      </div>
    </footer>
  );
};

export default Footer;
