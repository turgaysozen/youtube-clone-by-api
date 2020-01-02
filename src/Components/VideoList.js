import React from 'react';
import VideoItem from "./VideoItem";
import {Grid} from "@material-ui/core";

const VideoList = ({videos, onVideoSelect}) => {
    const videoItems = videos.map((video, id) => <VideoItem videoSelect={onVideoSelect} key={id} video={video}/> );
        return (
            <Grid style={{marginLeft: '30px'}} container spacing={10}>
            {videoItems}
            </Grid>
        )
    }

export default VideoList;
