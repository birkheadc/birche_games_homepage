import * as React from 'react';
import api from '../../../api';
import { INewGame } from '../../../model/INewGame';
import LoadingWidget from '../../loadingPage/LoadingWidget';
import './UploadForm.css'

interface IUploadFormProps {

}

function UploadForm(props: IUploadFormProps): JSX.Element {

  const [game, setGame] = React.useState<INewGame>({
    title: '',
    description: '',
    viewportRatio: 1.0,
    dist: null,
    coverImage: null
  });

  const [isWorking, setWorking] = React.useState<boolean>(false);

  const updateGame = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGame(values => ({...values, [e.target.name]: e.target.value}))
  }

  const upload = () => {
    async function upload() {
      setWorking(true);
      await api.uploadGame(game);
      setWorking(false);
    }
    upload();
  }

  function getContent(): JSX.Element {
    if (isWorking === true) {
      return (
        <LoadingWidget color={'var(--clr-bg-b'} />
      );
    }
    return (
      <form className='upload-form'>
        <label htmlFor='game-name-input'>Name:</label>
        <input id='game-name-input' name='title' onChange={updateGame} type='text'></input>
        <label htmlFor='game-description-input'>Description:</label>
        <input id='game-description-input' name='description' onChange={updateGame} type='text'></input>
        <label htmlFor='game-viewport-ratio-input'>Viewport Ratio:</label>
        <input id='game-viewport-ratio-input' name='viewportRatio' onChange={updateGame} type='number'></input>
        <label htmlFor='game-dist-input'>Zipped Dist:</label>
        <input id='game-dist-input' name='dist' onChange={updateGame} type='file'></input>
        <label htmlFor='game-dist-input'>Cover Image:</label>
        <input id='game-cover-image-input' name='coverImage' onChange={updateGame} type='file'></input>
        <button onClick={upload} type='button'>UPLOAD</button>
      </form>
    );
  }

  return (
    <div className='upload-form-wrapper'>
      {getContent()}
    </div>
  );
}

export default UploadForm;