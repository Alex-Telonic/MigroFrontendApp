import React from 'react';
import Link from 'react-router-dom/es/Link';
import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import {
    CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "@/_components/ChangingProgressProvider";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                    {percentage => (
                        <CircularProgressbar value={percentage} text={`${percentage}%`}/>
                    )}
                </ChangingProgressProvider>
            </div>
        );
    }
}

export {HomePage};
