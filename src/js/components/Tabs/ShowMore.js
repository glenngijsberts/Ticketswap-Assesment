// React deps
import React from 'react'

const ShowMore = (props) => {

    const item = props.item;
    const limit = `limit${item}`;

    if(props.length < 5) return null;

    return (

        <div className="ShowMore" onClick={() => props.showMore(item, limit)}>
            <a>Show more....</a>
        </div>

    );
};

export default ShowMore;