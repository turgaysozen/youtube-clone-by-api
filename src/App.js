import React from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./Components/SearchBar";
import VideoDetail from "./Components/VideoDetail";
import VideoList from "./Components/VideoList";
import youtube from "./api/youtube";

require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;

let results = [];

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        errorMessage: null,
    }

    componentDidMount() {
         this.handleSubmit('2020 usa');
    }

    selectVideoHandle = (video) => {
        const newResults = results.filter(v => v.id.videoId !== video.id.videoId);

        this.setState({
            selectedVideo: video,
            videos: MixVideos(newResults).slice(0, 7),
        });
    }

    handleSubmit = async (searchTerm) => {
        let res;
        try {
            res = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 12,
                    key: apiKey,
                    q: searchTerm
                }
            });
            //filter old videos by old videoId
            results = res.data.items.filter(v => v.id.videoId !== undefined);

        } catch (error) {
            this.setState({errorMessage: error.message});
        }

        this.setState({
            videos: MixVideos(results).slice(1).slice(0, 7),
            selectedVideo: results[0]
        });
    }

    render() {
        return (
            <Grid justify="center" container spacing={2}>
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        <Grid style={{marginTop: '20px', marginBottom: '10px'}} item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail error={this.state.errorMessage} video={this.state.selectedVideo} />
                        </Grid>
                        <Grid style={{ marginTop: '30px', marginBottom: '30px' }} spacing={5} item xs={3}>
                            <VideoList onVideoSelect={this.selectVideoHandle} videos={this.state.videos} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

//mix videos as randomly
function MixVideos(videos) {
    let mixedVideos = videos
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

    return mixedVideos;
}

export default App;
