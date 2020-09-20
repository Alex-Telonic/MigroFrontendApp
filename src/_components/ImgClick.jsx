import React from 'react';
import ReactPlayer from "react-player";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Link } from "react-router-dom";


class ImgClick extends React.Component {
    render () {
        return (
            <div>
                <Link to="/redbull">
                    <img src="/assets/img/camera.png" width={100} />
                </Link>
            </div>
        );
    }
}

export {ImgClick};