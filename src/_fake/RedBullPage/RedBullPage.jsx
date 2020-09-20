import React from 'react';
import { FakeCamera } from "@/_components/FakeCamera";
import ReactPlayer from "react-player";

class RedBullPage extends React.Component {
    render() {
        return (
            <ReactPlayer url="/assets/video/redbull.mp4" width="95%" height="95%" controls={false} playing={true} />
        );
    }
}

export {RedBullPage};
