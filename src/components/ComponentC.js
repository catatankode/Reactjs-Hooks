import React, {useContext} from 'react';
import {UserContext} from '../App';

export default function ComponentC (){
    const A = useContext(UserContext);
    return(
        <div>
            {A}
        </div>
    );
}