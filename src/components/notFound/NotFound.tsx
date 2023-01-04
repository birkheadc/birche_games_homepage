import * as React from 'react';
import './NotFound.css';

interface INotFoundProps {

}
function NotFound(props: INotFoundProps): JSX.Element {
  return (
    <div className='not-found-wrapper'>
      <h1>404</h1>
      <p>Sorry, we couldn't find what you were looking for.</p>
    </div>
  );
}

export default NotFound;