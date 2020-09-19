import React from 'react';
import ReactPlayer from "react-player";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Link } from "react-router-dom";


class ImgClick extends React.Component {
    render () {
        return (
            <div>
                <Link to="/nuts">
                    <img src="/assets/img/1.png" height={50} />
                </Link>
            </div>
        );
    }
}

export {ImgClick};