import React from 'react'

const Hoc = () => {
  return (
    <div>
        <h1>Default HOC</h1>
      <Outer mainfunc={Main} />
    </div>
  )
}

export default Hoc;


export function Outer(props){    

    return (       
        
        <h1 style={{backgroundColor: "red"}}>{<props.mainfunc />}</h1>

    )

}

export function Main(){
    return (

        <h1>Rais Pinjari</h1>

    )

}
