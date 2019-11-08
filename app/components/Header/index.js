import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from './logo2.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="#">
        <Img src={Logo} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.upcoming} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.live} />
        </HeaderLink>
        <HeaderLink to="/past">
          <FormattedMessage {...messages.past} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
