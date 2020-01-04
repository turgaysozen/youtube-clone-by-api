import React from 'react';
import { Paper, Typography, Grid } from "@material-ui/core";

function VideoItem({ video, videoSelect }) {
    return (
        <div>
            <Grid  style={{marginBottom:'34px', marginTop:'10px', width: '100%', height: '70px' }} spacing={10} item xs={12}>
                <Paper onClick={() => videoSelect(video)} style={{ display: 'flex',  width:'100%', cursor:'pointer'}}>
                    <img style={{ marginRight: '10px', width:'45%' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                    <Typography style={{ fontSize: '14px', marginRight:'5px' }}>
                        <b>{video.snippet.title}</b>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default VideoItem;
