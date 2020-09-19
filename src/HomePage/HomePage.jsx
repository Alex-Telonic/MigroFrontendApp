import React from 'react';
import Link from 'react-router-dom/es/Link';

import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {
    CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "@/_components/ChangingProgressProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const notify = () => toast("Wow so easy !");

        return (
            <div>
                <h1>Home</h1>
                <TextField id="standard-basic" label="Scan or search" />
                <div>
                    <List component="nav" aria-label="contacts">
                        <ListItem button>
                            <ListItemText primary="Chelsea Otakan"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Eric Hoffman"/>
                        </ListItem>
                    </List>
                </div>
                <Carousel>
                    <div>
                        <img src="assets/1.png" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="assets/2.png" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.png" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
                <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                    {percentage => (
                        <CircularProgressbar value={percentage} text={`${percentage}%`}/>
                    )}
                </ChangingProgressProvider>
                <div>
                    <button onClick={notify}>Notify !</button>
                    <ToastContainer />
                </div>
            </div>
        );
    }
}

export {HomePage};
