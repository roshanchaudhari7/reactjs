import React from 'react';
import { Link } from 'react-router-dom';


const ErrorComponent = ({ message }) => {
  const errorStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    border: '1px solid #f5c6cb',
    padding: '15px',
    borderRadius: '5px',
    margin: '10px 0',
    fontSize: '16px',
    textAlign: 'left',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: 'orange',
    border: '2px solid black',
    borderRadius: '5px',
    textDecoration: 'none', 
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
    <div style={errorStyle}>
      <h1>OOPS, looks like you picked some wrong route. <br />
      Let's go back to home together</h1>
      <button style={buttonStyle}>
        <Link to={"/"}>Home</Link>
      </button>
    </div>
    </>
  );
};

export default ErrorComponent
