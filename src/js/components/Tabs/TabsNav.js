import React from 'react';

const TabsNav = (props) => {
  return (

    <nav className="tabs-nav">

          <ul>
              {props.children}
          </ul>

    </nav>

  );
};

export default TabsNav;