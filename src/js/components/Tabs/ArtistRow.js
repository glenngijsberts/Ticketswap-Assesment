// React deps
import React from 'react';

const ArtistRow = (props) => {

    const { artist } = props;

    return (

        <div className="tab-row">

            <div className="tab-image-holder">
                {artist.images.length != 0 ? (
                    <img src={artist.images[2].url} alt={artist.name} className="responsive" />
                ) : (
                    <p className="no-image-found">No image found</p>
                )}
            </div>

            <div className="tab-text-holder">
                <h4>Artist</h4>
                <h3>{artist.name}</h3>
            </div>

        </div>

    );

}

export default ArtistRow;
