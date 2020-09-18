import React from 'react';
import Link from 'react-router-dom/es/Link';

import {
  CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          Go to
          {' '}
          <Link to="/google">Google</Link>
        </div>
        <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
          {percentage => (
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          )}
        </ChangingProgressProvider>
      </div>
    );
  }
}

export { HomePage };
