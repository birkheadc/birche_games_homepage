import * as React from 'react';
import './LoadingCurtain.css'

interface ILoadingCurtainProps {
  isVisible: boolean
}

function LoadingCurtain(props: ILoadingCurtainProps): JSX.Element | null {
  if (props.isVisible === false) {
    return null;
  }
  return (
    <div className='loading-curtain'>
      <span>LOADING</span>
    </div>
  );
}

export default LoadingCurtain;