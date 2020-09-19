import React from 'react';
import ReactPlayer from "react-player";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

class FakeCamera extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <ReactPlayer url={this.props.videoUrl} width="100%" height="100%" controls={false} playing={true} />
        )
    };
}

export {FakeCamera};