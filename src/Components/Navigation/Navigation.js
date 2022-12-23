import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <p
          onClick={() => onRouteChange('signout')}
          className="f3 link dim underline pa3 pointer">
          Sign Out
        </p>
      </nav>
    );
  }
};

export default Navigation;
