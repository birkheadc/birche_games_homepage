import * as React from 'react';
import api, { IApiResult } from '../../../api';
import { IGameProfile } from '../../../model/IGameProfile';
import ApiResultMessage from '../../apiResultMessage/ApiResultMessage';
import './DeleteGameForm.css'

interface IDeleteGameFormProps {
  handleWorking: (isWorking: boolean) => void
}

function DeleteGameForm(props: IDeleteGameFormProps): JSX.Element {

  const [profiles, setProfiles] = React.useState<IGameProfile[]>([]);
  const [selectionId, setSelectionId] = React.useState<string>('');
  const [result, setResult] = React.useState<IApiResult>({ message: '', errorCode: 0 });

  React.useEffect(() => {
    async function getProfiles() {
      setProfiles(await api.fetchGameProfiles());
    }
    getProfiles();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectionId(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    async function deleteGame() {
      props.handleWorking(true);
      const result = await api.deleteGame(selectionId);
      setResult(result);
      if (result.errorCode === 0) {
        setProfiles(await api.fetchGameProfiles());
        setSelectionId('');
      }
      props.handleWorking(false);
    }
    event.preventDefault();
    deleteGame();
  }

  function getContents(): JSX.Element {
    return (
      <form className='delete-game-form admin-form' onSubmit={handleSubmit}>
        <h2>Delete Game</h2>
        <ApiResultMessage result={result}/>
        <select className={selectionId === '' ? 'error' : ''} onChange={handleChange} value={selectionId}>
          <option value=''>Select Game To Delete</option>
          {profiles.map(
            profile =>
            <option style={{color: 'var(--clr-text-a)'}} key={profile.id} value={profile.id}>{profile.title}</option>
          )}
        </select>
        <button type='submit'>Delete</button>
      </form>
    );
  }

  return (
    <div className='delete-game-form-wrapper'>
      {getContents()}
    </div>
  );
}

export default DeleteGameForm;