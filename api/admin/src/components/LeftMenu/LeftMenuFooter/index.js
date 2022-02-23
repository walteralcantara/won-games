import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {

  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="https://github.com/walteralcantara" target="_blank" rel="noopener noreferrer">
          Walter Alcantara
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
