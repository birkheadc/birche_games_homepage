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

  const updateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) return;
    setGame(values => ({...values, [e.target.name]: e.target.files![0]}));
  }

  const upload = (e: React.FormEvent<HTMLElement>) => {
    async function upload() {
      setWorking(true);
      await api.uploadGame(game);
      // if (game.dist != null) await api.uploadFile(game.dist);
      setWorking(false);
    }
    e.preventDefault();
    upload();
  }

  function getContent(): JSX.Element {
    if (isWorking === true) {
      return (
        <LoadingWidget color={'var(--clr-bg-b'} />
      );
    }
    return (
      <form className='upload-form' onSubmit={upload}>
        <label htmlFor='game-name-input'>Name:</label>
        <input id='game-name-input' name='title' onChange={updateGame} type='text' value={game.title}></input>
        <label htmlFor='game-description-input'>Description:</label>
        <input id='game-description-input' name='description' onChange={updateGame} type='text' value={game.description}></input>
        <label htmlFor='game-viewport-ratio-input'>Viewport Ratio:</label>
        <input id='game-viewport-ratio-input' name='viewportRatio' onChange={updateGame} step='0.1' type='number' value={game.viewportRatio}></input>
        <label htmlFor='game-dist-input'>Zipped Dist:</label>
        <input id='game-dist-input' name='dist' onChange={updateFile} type='file'></input>
        <label htmlFor='game-dist-input'>Cover Image:</label>
        <input id='game-cover-image-input' name='coverImage' onChange={updateFile} type='file'></input>
        <button type='submit' >UPLOAD</button>
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