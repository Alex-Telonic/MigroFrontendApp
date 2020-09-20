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
import {ImgClick} from "@/_components/ImgClick";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const notify = () => toast("Wow so easy !");
        const ScanBanner = () => (
            <div className="sameRow">
                <TextField id="standard-basic" label="Scan or search" fullWidth={true} size={"medium"}/>
                <ImgClick/>
            </div>
        );

        const percentage = 70;
        const ProgressBar = () => (
            <div id={"progressBar"}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        trailColor: "transparent"
                    })}
                />
                <p>of your monthly goals!</p>
            </div>
        );

        const Dashboard = () => (
            <div>
                <List component="nav" aria-label="contacts" id={"dashboard"}>
                    <ListItem button >
                        <img src="/assets/img/biotta.png" height={100} />
                        <p>new product in discount!</p>
                    </ListItem>
                    <ListItem button>
                        <img src="/assets/img/cheese.png" height={100} />
                        <p>just fresh in your Migros-Supermarkt - Hauptbahnhof !</p>
                    </ListItem>
                    <ListItem button>
                        <Fab variant="extended" id={"fab"}>
                            Insights: see how you compare with others
                        </Fab>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <h1>Scan or search for item</h1>
                <ScanBanner/>
                <ProgressBar/>
                <Dashboard/>
            </div>
        );
    }
}

export {HomePage};
