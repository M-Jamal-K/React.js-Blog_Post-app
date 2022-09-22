import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <>
      <h1>Sorry!</h1>
      <h3>Page Not Found!</h3>
      <Link to="/" className="gotoHOMEPAGE">
        GO TO HOMEPAGE
      </Link>
    </>
  );
};

export default notFound;
