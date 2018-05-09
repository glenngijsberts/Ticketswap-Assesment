// React deps
import React, { Component } from 'react'

// Other deps
import classnames from 'classnames'

// Custom components
import TabsNav from './Tabs/TabsNav'
import TabsLink from './Tabs/TabsLink'
import TabsContent from './Tabs/TabsContent'
import Tab from './Tabs/Tab'

import TrackRow from './Tabs/TrackRow'
import AlbumRow from './Tabs/AlbumRow'
import ArtistRow from './Tabs/ArtistRow'

import ShowMore from './Tabs/ShowMore'

class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'Tracks'
        }

        this.toggle = this.toggle.bind(this);

    }

    // Toggle showing of tabs (data from TabsLink)
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        const { tracks, albums, artists } = this.props;
        
        return(

            <React.Fragment>

                {/* Tabs buttons */}
                <TabsNav>
                    <TabsLink title="Tracks" toggle={this.toggle} activeTab={this.state.activeTab} />
                    <TabsLink title="Artists" toggle={this.toggle} activeTab={this.state.activeTab} />
                    <TabsLink title="Albums" toggle={this.toggle} activeTab={this.state.activeTab} />
                </TabsNav>

                {/* Tab content with a tab for each state (tracks, artists, albums) */}
                <TabsContent>

                        <Tab title="Tracks" activeTab={this.state.activeTab}>

                            {tracks.map((item) => {

                                return <TrackRow key={item.id} track={item} />

                            })}

                            {tracks.length <= 0 &&
                                <p>No results</p>
                            }
                            
                            {/* Component that will trigger the showmore function in parent */}
                            <ShowMore item="Tracks" length={tracks.length} showMore={this.props.showMore} />
                            
                        </Tab>
                        <Tab title="Artists" activeTab={this.state.activeTab}>

                            {artists.map((item) => {

                                return <ArtistRow key={item.id} artist={item} />

                            })}

                            {artists.length <= 0 &&
                                <p>No results</p>
                            }

                            {/* Component that will trigger the showmore function in parent */}
                            <ShowMore item="Artists" length={artists.length} showMore={this.props.showMore} />

                        </Tab>
                        <Tab title="Albums" activeTab={this.state.activeTab}>

                            {albums.map((item) => {

                                return <AlbumRow key={item.id} album={item} />

                            })}

                            {albums.length <= 0 &&
                                <p>No results</p>
                            }

                            {/* Component that will trigger the showmore function in parent */}
                            <ShowMore item="Albums" length={albums.length} showMore={this.props.showMore} />

                        </Tab>

                </TabsContent>

            </React.Fragment>

        );

    }

}

export default Tabs;

