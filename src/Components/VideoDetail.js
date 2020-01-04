import React from 'react'
import { Paper, Typography } from "@material-ui/core";

class VideoDetail extends React.Component {
    render() {
        if (this.props.error !== null) return <div>{this.props.error} - Youtube Api Request Exceeded Limit</div>
        if (!this.props.video) return <div>Loading...</div>

        const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <div>
                <React.Fragment>
                    <Paper elevation={6} style={{ height: '565px', width: '100%' }}>
                        <iframe frameBorder="0" height="565px" width="100%" title="Video Player" src={videoSrc}></iframe>
                    </Paper>
                    <Paper elevation={6} style={{ padding: '15px', height: '190px' }}>
                        <Typography variant="h4">
                            {this.props.video.snippet.title.replace('&#39;',"'").replace('&#39;',"'").replace('&amp;','&').replace('&amp;','&').replace('&quot;','"').replace('&quot;','"')}
                        </Typography>
                        <Typography variant="h5">
                            {this.props.video.snippet.channelTitle.replace('&#39;',"'").replace('&#39;',"'").replace('&amp;','&').replace('&amp;','&').replace('&quot;','"').replace('&quot;','"')}
                        </Typography>
                        <Typography variant="h6">
                            {this.props.video.snippet.description.replace('&#39;',"'").replace('&#39;',"'").replace('&amp;','&').replace('&amp;','&').replace('&quot;','"').replace('&quot;','"')}
                        </Typography>
                    </Paper>
                </React.Fragment>

            </div>
        )
    }
}

export default VideoDetail;
