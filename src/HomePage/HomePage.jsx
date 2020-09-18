import React from 'react';
import Link from 'react-router-dom/es/Link';

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
      </div>
    );
  }
}

export { HomePage };
