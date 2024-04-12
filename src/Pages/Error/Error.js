import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
    const errorMessage=useRouteError();
    console.log(errorMessage)
  return (
    <>
    <div>Page Not found</div>
    <div>{errorMessage.status} {errorMessage.statusText}</div>
    </>
  )
}

export default Error