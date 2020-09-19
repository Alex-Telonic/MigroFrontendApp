import React from 'react';
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Carousel} from "react-responsive-carousel";

class ProductInfoPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Product info</h1>
                <div>
                    <Carousel autoPlay>
                        <div>
                            <img src="assets/img/1.png" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="assets/img/2.png" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="assets/img/3.png" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
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

            </div>
        );
    }
}

export {ProductInfoPage};
