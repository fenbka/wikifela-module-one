import { Button } from '@material-ui/core';
import * as React from 'react';
import { useHistory, useParams } from 'react-router';

export const ClientProfilePage: React.FC = () => {

  const history = useHistory();
  const { clientId } = useParams<{ clientId?: string }>();

  console.warn('clientId ---->', clientId);


  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (_e) => {
    history.push('/client/')
  }
  return (
    <div>
      client profile page

      <Button onClick={handleClick}>
        history button
      </Button>
    </div>
  )
}