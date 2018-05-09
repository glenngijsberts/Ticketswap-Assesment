// React deps
import React from 'react'

// Other deps
import classnames from 'classnames'

const TabsLink = (props) => {
  return (

      <li className={classnames({ active: props.activeTab === props.title })} onClick={() => { props.toggle(props.title) }}>
          <a>{props.title}</a>
      </li>

  );
};

export default TabsLink;