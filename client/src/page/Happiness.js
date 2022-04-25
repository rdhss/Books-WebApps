import React from 'react'
import NavbarMain from '../component/NavbarMain'
import ContainerCard from '../component/ContainerCard'

const Main = (props) => {

  return (
    <div className='px-5'>
      <NavbarMain />
      <div className='mt-5'>
        <ContainerCard category={props.category}/>
      </div>
    </div>
  )
}

export default Main