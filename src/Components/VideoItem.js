import React from 'react';
import { Paper, Typography, Grid } from "@material-ui/core";

function VideoItem({ video, videoSelect }) {
    return (
        <div>
            <Grid style={{marginTop:'15px' }} item xs={12}>
                <Paper onClick={() => videoSelect(video)} style={{ display: 'flex',  width:'100%', cursor:'pointer'}}>
                    <img style={{ marginRight: '20px', width:'60%' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                    <Typography style={{ fontSize: '14px' }}>
                        <b>{video.snippet.title}</b>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default VideoItem;
