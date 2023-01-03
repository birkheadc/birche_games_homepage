import * as React from 'react';
import './LoadingWidget.css';

interface ILoadingWidgetProps {
  color: string
}
function LoadingWidget(props: ILoadingWidgetProps): JSX.Element {
  return (
    <div className='loading-circle' style={{ color: props.color }}>
      
    </div>
  );
}

export default LoadingWidget;