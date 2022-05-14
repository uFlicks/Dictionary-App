import React from 'react'
import './Definitions.css'

const Definitions = ({word,meaning}) => {
  return (
    <div className='meanings'>
      {
        word===''?(<span className='subTitle'>Please enter a word</span>)
        :
        (
          meaning.map((mean)=>
            mean.meanings.map((item)=>
            item.definitions.map((def)=>(
              <div>
                <b>{def.definition}</b>
                <hr style={{margin:'10px 0'}} />
              </div>
              
              )
              
               
            )
            )
          )
        )
      }
    </div>
  )
}

export default Definitions