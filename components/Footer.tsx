function Footer() {
  return (
    <footer className="p-4 text-sm border-solid md:flex md:items-center md:justify-between md:p-6">
      <div>
        <div className="text-left md:text-center">
          Copyright ©{" "}
          <a href="https://www.linkedin.com/in/sandysjadhav/">SandySJadhav</a>
        </div>
      </div>
      <ul className="list-none pl-0 flex flex-wrap items-center mt-3 text-sm sm:mt-0 md:pl-10">
        <li>
          <a
            href="https://www.kohlercompany.com/privacy"
            className="mr-4 no-underline md:mr-10"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://kohler.service-now.com/gdp/form.do"
            className="mr-4 no-underline md:mr-10"
          >
            Subject Access Request
          </a>
        </li>
        <li>
          <a
            href="https://www.kohlercompany.com/legal"
            className="mr-4 no-underline"
          >
            Terms of Service
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
