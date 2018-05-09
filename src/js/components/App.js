// React deps
import React, { Component } from 'react'

// Custom Components
import Search from './Search'
import Tabs from './Tabs'

// Import Spotify API helper class
import spotifyApi from 'utils/spotify'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            albums: [],
            artists: [],

            limitTracks: 5,
            limitAlbums: 5,
            limitArtists: 5,

            searchInput: '',
            searched: false,
        }

        this.requestSearch = this.requestSearch.bind(this);
        this.searchAlbums = this.searchAlbums.bind(this);
        this.searchTracks = this.searchTracks.bind(this);
        this.searchArtists = this.searchArtists.bind(this);
        this.showMore = this.showMore.bind(this);

    }

    // This function will run when data gets passed by search component
    requestSearch(input) {
    
        this.setState({
            searchInput: input, 
            limitTracks: 5, 
            limitAlbums: 5, 
            limitArtists: 5
        }, () => {

            // Run all search methods
            this.searchTracks(input);
            this.searchAlbums(input);
            this.searchArtists(input);

        });
        
    }
    
    // Function for searching albums and assigning to the albums state
    searchAlbums(input) {
        // Limit get's updated by ShowMore function, reset to 5 with new search
        spotifyApi.searchAlbums(input, {limit: this.state.limitAlbums})
            .then((data) => {

                const albums = data.albums.items;

                this.setState({
                    albums
                }, () => {
                    this.setState({
                        searched: true
                    })
                })

            }, (err) => {
                console.log(err);
            });

    }

    // Function for searching artists and assigning to the artists state
    searchArtists(input) {
        // Limit get's updated by ShowMore function, reset to 5 with new search
        spotifyApi.searchArtists(input, {limit: this.state.limitArtists})
            .then((data) => {

                const artists = data.artists.items;

                this.setState({
                    artists
                }, () => {
                    this.setState({
                        searched: true
                    })
                })

            }, (err) => {
                console.log(err);
            });

    }

    // Function for searching tracks and assigning to the tracks state
    searchTracks(input) {
        // Limit get's updated by ShowMore function, reset to 5 with new search
        spotifyApi.searchTracks(input, {limit: this.state.limitTracks})
            .then((data) => {

                const tracks = data.tracks.items;

                this.setState({
                    tracks
                }, () => {
                    this.setState({
                        searched: true
                    })
                })

            }, (err) => {
                console.log(err);
            });

    }

    // Showmore function to update the search limit, activated from specific tab
    showMore(type, limit) {
        this.setState((prevState) => {
            return { [limit]: prevState[limit] + 10 };
        }, () => {

            // Depending from tab, run the search function that belongs to that tab
            switch(type) {
                case 'Tracks': this.searchTracks(this.state.searchInput); break;
                case 'Albums': this.searchAlbums(this.state.searchInput); break;
                case 'Artists': this.searchArtists(this.state.searchInput); break;
            }

        });

    }

    render() {

        const { searched, tracks, albums, artists } = this.state;

        return (
            <div className="container">

                {/* Search input for tracks, albums, artists  */}
                <Search requestSearch={this.requestSearch} />

                {searched &&
                
                <main>
                    {/* Tabs with tracks, albums and artists */}
                    <Tabs tracks={tracks} albums={albums} artists={artists} showMore={this.showMore} />

                </main>

                }

            </div>
        );
    }
}

export default App
