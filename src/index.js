// lodash.
import _ from 'lodash';
// Imports react libaries.
import React, { Component } from 'react';
import ReactDom from 'react-dom';
// YTSearch package.
import YTSearch from 'youtube-api-search';
// SearchBar.
import SearchBar from './components/search_bar';
// Video List.
import VideoList from './components/video_list';
// Video details.
import VideoDetail from './components/video_detail';

// Youtube API.
const API_KEY = 'AIzaSyCrhNowtetdhr1Z8YLZukKSwcFLl8wgO5g';

// Creating a new component.
// This component should make some HTML.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('linus tech tips');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term), 500 });

        return (
            <div>
                <SearchBar
                    onSearchTermChange={videoSearch} />
                <VideoDetail
                    video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Taking component's generated HTML and placing it on the page (in DOM).
ReactDom.render(<App />, document.querySelector('.container'));


// -------------------Notes---------------------------
// To use state you need to make class based component.
// this.setState({ videos: videos }); -> only if same name.
// debounce calls new function on determined time.