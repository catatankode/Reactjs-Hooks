# useEffect

:key: Dasar:
* **useEffect** fungsi yang digunakan untuk menjalankan *side effects*.
* sintaks : `useEffect(effectFunction, arrayDependencies)`

## Basic Side Effect
Pada dasarnya useEffect akan dijalankan setalah proses return selesai dijalankan dan akan berubah jika terjadi perubahan. Seperti contoh berikut kita akan merubah judul halaman. 
```js
import React, {useState, useEffect} from 'react' // import useEffect
const App = () => {
  const [age, setAge] = useState(0)
  
  const handleClick = () => setAge(age + 1)

  useEffect(() => {
    document.title = `Clicked ${age} times`
  })

  return (
    <div>
        <button onClick={handleClick}>Update Title!! </button>
    </div>
  );
}
```
Untuk lebih paham, kita bandingkan dengan *life cycle* di *class component*
```js
...
class App extends React.component {
    constructor(props){
    super(props);
    this.state = {
        count:0
    }}

    // akan dijalankan setealah proses return atau render selesai 
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    // akan dijalankan jika ada perubahan
    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} times`
    }
    
    render(){
        return(
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}> Update Title!! </button>
            </div>
        );
    }
}
``` 

## useEffect Sekali panggil
Untuk menggunakan useEffect hanya sekali panggil setelah return selesai yaitu hanya tambahkan *array* kosong pada parameter kedua seperti ini
```js
import React, {useState, useEffect} from 'react' // import useEffect
const App = () => {
  const [age, setAge] = useState(0)
  
  const handleClick = () => setAge(age + 1)

  useEffect(() => {
    document.title = `Clicked ${age} times`
  }, []) // tambahkan array kosong, artinya hanya akan dieksekusi sekali saja walaupun ada perubahan

  return (
    <div>
        <button onClick={handleClick}>Update Title!! </button>
    </div>
  );
}
```

## useEffect with Cleanup
Ini sama halnya jika di **class component** namanya `componentWillUnmount()`. Di useEffect untuk menjalankan hal itu tinggal gunakan `return` didalam useEffect seperti ini 
```js
...

const App = () => {
  useEffect(() => {
    const clicked = () => console.log('window clicked')
    window.addEventListener('click', clicked)

    // return a clean-up function / unmount
    return () => {
      window.removeEventListener('click', clicked)
    }
  }, [])

  return (
    <div>
      klik dimana aja akan memberikan pesan di console 
    </div>
  )
}
```

## useEffect sesuai kondisi
Disamping kita bisa mengeksekusi hanya sekali, kali ini kita akan mengeksekusi sesuai kodisi saja, misalnya hanya untuk state tertentu saja seperti di bawah ini:

```js
...
const App = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const [effectLogs, setEffectLogs] = useState([])

  useEffect(
    () => {
      setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
    },
    [randomNumber] // useEffect akan mengalami perubahan sesuai kondisi ini
  )

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button
        onClick={() => {
          setRandomNumber(Math.random())
        }}
      >
        Generate random number!
      </button>
      <div>
        {effectLogs.map((effect, index) => (
          <div key={index}>{'|'.repeat(index) + effect}</div>
        ))}
      </div>
    </div>
  )
}
```
kondisi diatas bisa digunakan untuk banyak kondisi, tinggal masukkan kedalam `array`. 

## Multiple Effect
Multiple useEffect dapat terjadi dalam komponen fungsional seperti yang ditunjukkan di bawah ini:

```js
...
const App = () => {
  // useEffect pertama
  useEffect(() => {
    const clicked = () => console.log('window clicked')
    window.addEventListener('click', clicked)

    return () => {
      window.removeEventListener('click', clicked)
    }
  }, [])

  // useEffect kedua
  useEffect(() => {
    console.log("another useEffect call");
  })

  return (  
    <div>
      Untuk melihat hasilnya buka console di browser
    </div>
  ) 
}
```