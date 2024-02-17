import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Harry Potter in Howarts</p>
      </div>
    </footer>
  );
};

export default Footer;
