import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDogs from '../common/LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDogs interval={100} dots={20}/>}
    </nav>
  );
};

Header.propType = {
  loading: PropTypes.bool.isRequired
};

export default Header;
