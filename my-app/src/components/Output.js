import * as React from 'react'
import { useState, useEffect} from 'react'

function A() {
    console.log('A')
    return <B/>
  }
  
  function B() {
    console.log('B')
    return <C/>
  }
  
  function C() {
    console.log('C')
    return null
  }
  
  function D() {
    console.log('D')
    return null
  }
  
  const Output =()=> {
    const [state, setState] = useState(0)
    useEffect(() => {
      setState(state => state + 1)
    }, [])
    console.log('App')
    return (
      <div>
        <A state={state}/>
        <D/>
      </div>
    )
  }

  export default Output