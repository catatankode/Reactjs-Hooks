# useState

Dasar:
* **useState** itu mengijinkan kita untuk menggunakan lokal state didalam *function*.
* sintaks : `const [state, setState] = useState(initialStateValue)`

## Deklarasi Varaibel State
Untuk mendeklarasikan variabel state, sangat mudah pertama import `useState` dari `react` lalu buat variable didalam *function* yang nilainya adalah `useState()` dan didalam itu bisa diisikan nilai state-nya
```js
import React, {useState} from 'react' // import useState

const functionName = () => {
    const [count] = useState(0); // mendeklarasikan nilai state
    return(
        <div>
            Nilai dari variable :{count} {/* menampilkan nilai state-nya */}
        </div>
    )
}
```
## Update Variabel State
Untuk mengupdate nilai state nya cukup tambahkan nama variabel di array ke kedua, agar lebih mudah  namanya samakan dengan nama deklarasinya tapi tambahkan *set* didepannya misalnya, nama state nya *count* makan nama update state-nya *setCount*, agar mudah aja digunakan.
```js
...
const functionName = () => {
    const [count, setCount] = useState(0);// mendeklarasikan state dan update state variable
    return(
        <div>
            Nilai dari variable: {count} {/* memanggil nilai state-nya*/}
            <button onClick = {() => setCount(count+1)}> {/* mengupdate nialai state nya */}
        </div>
    )
}
```

## Beberapa Variabel State 
Kita juga bisa mendeklarasikan banyak state dan mengupdatenya, sebagai contoh:
```js
...
const functionName = () => {
  const [age, setAge] = useState(17)
  const [grade, setGrade] = useState(12)

  const handleAge = () => setAge(age + 1)
  const handleGrade = () => setGrade(grade + 1)

  return (
    <div>
      <p>Umurku saat ini {age} </p>
      <p>Aku duduk di kelas {grade}</p>

      <div>
        <button onClick={handleAge}>
            Umurku bertambah
        </button>
        <button onClick={handleGrade}>
            Aku naik kelas
        </button>
      </div>
    </div>
  )
}
```

## Variabel State dalam bentuk Object
Seperti halnya tipe data *string* dan *number*, kita juga bisa menggunakan tipe data *object* sebagai nilai awal dari `useState`
```js
...
const functionName = () => {
    const [state, setState] = useState({age:17, grade:12})

  const handleClick = (value) => setState({
      ...state,
      [value]:state[value] + 1
  })

  return (
    <div>
      <p>Umurku saat ini {state.age} </p>
      <p>Aku duduk di kelas {state.grade}</p>

      <div>
        <button onClick={() => handleClick('age')}>
            Umurku bertambah
        </button>
        <button onClick={() => handleClick('grade')}>
            Aku naik kelas
        </button>
      </div>
    </div>
  )
}
```

## Inisialisasi State dengan Function
Sama seperti inisialisai state berdasarkan tipe data, hanya saja nilai inisialisasinya berupa *function*
```js
...
const functionName = () => {
    () => {
  const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default#-token#"
  })

  return <div>Tokennya adalah {token}</div>
}
```

