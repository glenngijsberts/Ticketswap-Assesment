// React deps
import React from 'react'

// Other deps
import classnames from 'classnames'

const Tab = (props) => {
    return (

        <div className={classnames({ hide: props.activeTab != props.title, 'tab': true })}>

            {props.children}

        </div>

    );
};

export default Tab;