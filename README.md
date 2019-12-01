# useContext

Dasar:
* **useContext** mempermudah kita untuk mengkonsumsi `context comsumer`.
* sintaks : `const contextValue = useContext(contextObject)`

useContext memiliki API yang lebih sederhana dibandingkan dengan `myContext.consumer`, untuk lebih jelasnya ayo kita lihat konsumsi *context* dengan *cosumer* terlebih dahulu
1. di file `App.js`
```js
import React from 'react';
import ComponentA from './components/ComponentA';

export const UserContext = React.createContext(); // Membuat context provider

function App() {
  return (
    <div>
        <ComponentA />
    </div>
  );
}

export default App;
```
Context Provider component digunakan sebagai context parent yang bisa digunakan untuk anak component

2.src/components/`ComponentA.js`
```js
import React from 'react';
import ComponentB from './ComponentB';

export default function ComponentA() {
    return(
        <div>
            <ComponentB />
        </div>
    );
}
```
Dikasus ini kita tidak akan mengkonsumsi di anak ComponentB melainkan di ComponentC, sehingga di ComponentB tidak perlu dipanggil providernya.
3. src/components/`ComponentC.js`
```js
import React from 'react';
import {UserContext} from '../App'; // memenggil providernya

export default function ComponentC (){
    return(
        <div>
            <UserContext.Consumer> {/* untuk menggunakannya harus dibungkus dengan Consumer agar menandakan ini anak nya*/}
                {
                    value => {
                        return <div>This is a {value}</div>
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}
```
untuk mengkosumsi *context* kita harus membungkusnya dengan <UserContext.Consumer> agar bisa menggunkaan *context* didalam tag tersebut.

Jika menggunakan `useContext` kita bisa menggunakannya tanpa harus membungkusnya dengan sebuah tag, hanya perlu import `useCOntext` dan deklarasikan dalam sebuah variable kemudian untuk menggunakannya cukup panggil nama variablenya seperti ini: 
```js
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
```