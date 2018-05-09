// React deps
import React from 'react';

const AlbumRow = (props) => {

    const { album } = props;
    const image = props.album.images[2].url;

    return (

        <div className="tab-row">

            <div className="tab-image-holder">
                <img src={image} alt={album.name} className="responsive" />
            </div>

            <div className="tab-text-holder">
                <h4>Album</h4>
                <h3>{album.name}</h3>
            </div>

        </div>

    );

}

export default AlbumRow;
