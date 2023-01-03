import * as React from 'react';
import './LoadingPage.css';
import LoadingWidget from './LoadingWidget';

interface ILoadingPageProps {

}
function LoadingPage(props: ILoadingPageProps): JSX.Element {
  return (
    <LoadingWidget color={'var(--clr-bg-a'} />
  );
}

export default LoadingPage;