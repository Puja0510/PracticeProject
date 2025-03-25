import React from "react";

// Higher-Order Component
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log(`Component Rendered: ${WrappedComponent.name}`);
    return <WrappedComponent {...props} />;
  };
};

// Base Component
const UserProfile = ({ name }) => {
  return <h2>Welcome, {name}!</h2>;
};

// Wrapping UserProfile with Logger HOC
const UserProfileWithLogger = withLogger(UserProfile);

export default UserProfileWithLogger;