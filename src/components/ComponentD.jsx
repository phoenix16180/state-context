import {useContext} from 'react';
import { UserContext } from './ComponentA';

function ComponentD() {
    const { user, setUser } = useContext(UserContext)

    return (
        <fieldset>
            <h1>ComponentD</h1>
            <h5>Hello {user}</h5>
            <button onClick={() => setUser("NewUser")}>Change User</button>
        </fieldset>
    )
}

export default ComponentD