import * as React from 'react';
import './ApiResultMessage.css'

export interface IApiResult {
  message: string,
  errorCode: number
}

interface IApiResultMessageProps {
  result: IApiResult
}

function ApiResultMessage(props: IApiResultMessageProps): JSX.Element | null {
  if (props.result.message === '') {
    return null;
  }
  return (
    <span className={'api-result-message ' + (props.result.errorCode === 0 ? 'success' : 'error')}>
      {props.result.message}
    </span>
  );
}

export default ApiResultMessage;