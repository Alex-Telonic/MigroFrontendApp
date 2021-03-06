import React from 'react';
import { FakeCamera } from "@/_components/FakeCamera";
import ReactPlayer from "react-player";

class NutsPage extends React.Component {
    render() {
        return (
            <ReactPlayer url="/assets/video/nuts.mp4" width="100%" height="100%" controls={false} playing={true} />
        );
    }
}

export {NutsPage};
