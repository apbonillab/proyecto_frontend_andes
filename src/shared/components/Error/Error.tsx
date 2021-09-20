import React from 'react';
import  './Error.module.scss';

const Error: React.FC = (props:any) => (
  <div className="Error" data-testid="Error">
    <h1>  Error En Sistema</h1>
     <span>  {props.error} </span>
  </div>
);

export default Error;
