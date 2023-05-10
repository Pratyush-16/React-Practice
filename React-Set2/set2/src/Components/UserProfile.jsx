/**
 * Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.
 */

import React from 'react';

export const UserProfile = (prop) => {
  const { name, email, age } = prop.userData;

  return (
    <div>
      <h1>User Profile</h1>
    
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>

      
    </div>
  );
};
