import React from 'react';

const Error = (props) => {
  return (
    <div>
      <p>Oops, something went wrong!</p>
      <p>From Server: {props.message}</p>
    </div>
  );
};

export default Error;
