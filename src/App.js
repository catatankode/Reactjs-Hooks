import React, {useEffect} from 'react' // import useEffect

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

export default App;