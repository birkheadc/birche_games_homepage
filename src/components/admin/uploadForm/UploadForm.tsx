import * as React from 'react';
import api, { IApiResult } from '../../../api';
import IGameValidity from '../../../api/gameValidity';
import { INewGame } from '../../../model/INewGame';
import ApiResultMessage from '../../apiResultMessage/ApiResultMessage';
import LoadingWidget from '../../loadingPage/LoadingWidget';
import './UploadForm.css'

interface IUploadFormProps {
  handleWorking: (isWorking: boolean) => void
}

const BLANK_GAME = {
  title: '',
  description: '',
  viewportRatio: 1.0,
  dist: null,
  coverImage: null
}

function UploadForm(props: IUploadFormProps): JSX.Element {

  const [result, setResult] = React.useState<IApiResult>({ message: '', errorCode: 0});

  const [game, setGame] = React.useState<INewGame>(BLANK_GAME);
  const [validity, setValidity] = React.useState<IGameValidity>(api.getGameValidity(game));

  const updateGame = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGame(values => ({...values, [e.target.name]: e.target.value}))
  }

  const updateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) return;
    setGame(values => ({...values, [e.target.name]: e.target.files![0]}));
  }

  const upload = (e: React.FormEvent<HTMLElement>) => {
    async function upload() {
      props.handleWorking(true);
      const result: IApiResult = await api.uploadGame(game);
      setResult(result);
      if (result.errorCode === 0) {
        setGame(BLANK_GAME);
      }
      props.handleWorking(false);
    }
    e.preventDefault();
    upload();
  }

  React.useEffect(() => {
    setValidity(api.getGameValidity(game))
  }, [game]);

  return (
    <div className='upload-form-wrapper'>
      <form className='upload-form admin-form' onSubmit={upload}>
        <h2>Upload Game</h2>
        <ApiResultMessage result={result} />
        <div className='admin-form-row-wrapper'>
          <label className={validity.title ? 'success' : 'error'} htmlFor='game-name-input'>Name</label>
          <input className='text-input' id='game-name-input' name='title' onChange={updateGame} type='text' value={game.title}></input>
        </div>
        <div className='admin-form-row-wrapper'>
          <label className={validity.description ? 'success' : 'error'} htmlFor='game-description-input'>Description</label>
          <input className='text-input' id='game-description-input' name='description' onChange={updateGame} type='text' value={game.description}></input>
        </div>
        <div className='admin-form-row-wrapper'>
          <label className={validity.viewportRatio ? 'success' : 'error'} htmlFor='game-viewport-ratio-input'>Viewport Ratio</label>
          <input className='text-input' id='game-viewport-ratio-input' name='viewportRatio' onChange={updateGame} step='0.1' type='number' value={game.viewportRatio}></input>
        </div>
        <div className='admin-form-row-wrapper'>
          <label className={validity.dist ? 'success' : 'error'} htmlFor='game-dist-input'>Zipped Dist</label>
          <input className='file-input' id='game-dist-input' name='dist' onChange={updateFile} type='file'></input>
        </div>
        <div className='admin-form-row-wrapper'>
          <label className={validity.coverImage ? 'success' : 'error'} htmlFor='game-dist-input'>Cover Image</label>
          <input className='file-input' id='game-cover-image-input' name='coverImage' onChange={updateFile} type='file'></input>
        </div>
        <div className='submit-button-wrapper'>
          <button type='submit' >Upload</button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;