import React, {useEffect} from 'react' // import useEffect

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

export default App;