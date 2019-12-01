import React from 'react';
import ComponentB from './ComponentB';
import {UserContext} from '../App';

export default function ComponentA() {
    return(
        <UserContext.Provider value={'Valaue of Context'}>
            <ComponentB />
        </UserContext.Provider>
    );
}