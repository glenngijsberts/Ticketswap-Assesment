// React deps
import React from 'react';

// Import playbutton icon
import play from '../../../assets/img/play.svg';

const TrackRow = (props) => {

    const { track } = props;
    const image = props.track.album.images[2].url;
    const playLink = props.track.external_urls.spotify;

    return (

        <div className="tab-row">

            <div className="tab-image-holder relative">
                <a href={playLink} className="play-track" target="_blank">
                    <img src={image} alt={track.album.name} className="responsive rounded" />
                    <div className="play">
                        <img src={play} className="responsive play-icon" />   
                    </div>
                </a>
            </div>

            <div className="tab-text-holder">
                <h4>{track.album.name}</h4>
                <h3>{track.name}</h3>
            </div>

        </div>

    );

}

export default TrackRow;
