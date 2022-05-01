import './footer.css';
import githubLogo from '../../utils/imgs/github.png';

import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p id='footer-txt'>Copyright © 2022 ezee969</p>
      <a
        id='gh-a'
        href='http://github.com/ezee969'
        rel='noreferrer'
        target='_blank'
      >
        <img id='gh-img' src={githubLogo} alt='link to github' />
      </a>
    </footer>
  );
}
