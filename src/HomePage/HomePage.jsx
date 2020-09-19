import React from 'react';
import { Link } from "react-router-dom";

import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {
    CircularProgressbar, buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

import LinearProgressWithLabel from '@/_components/LinearProgressWithLabel';
import { userModel, userService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const notify = () => toast("Wow so easy !");
        const ScanBanner = () => (
            <div className="sameRow">
                <TextField id="standard-basic" label="Scan or search" fullWidth={true} size={"medium"}/>
                <div>
                    <img src="assets/1.png" height={50}/>
                </div>
            </div>
        );

        const percentage = 70;
        const ProgressBar = () => (
            <div>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        trailColor: "transparent"
                    })}
                />
            </div>
        );

        const Dashboard = () => (
            <div>
                <List component="nav" aria-label="contacts">
                    <ListItem button>
                        <ListItemText primary="a"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="b"/>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <h1>Home</h1>
                <ScanBanner/>
                <ProgressBar/>
                <Dashboard/>
            </div>
        );
    }
}

export {HomePage};
