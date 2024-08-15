import { useState, createContext } from 'react';
import ComponentB from './ComponentB';

export const UserContext = createContext()

function ComponentA() {

    const [user, setUser] = useState("1337User")

    return (
        <fieldset>
            <h1>ComponentA</h1>
            <h5>Hello {user}</h5>
            
            <UserContext.Provider value={{ user, setUser }}>
                <ComponentB user={user} />
            </UserContext.Provider>
        </fieldset>
    )
}

export default ComponentA
