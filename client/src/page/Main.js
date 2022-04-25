import React, { useEffect } from 'react'
import NavbarMain from '../component/NavbarMain'
import axios from 'axios'
import { parse } from 'flatted'
import Recomended from '../component/Recomended'

const Main = () => {
  useEffect(() => {
    axios.get('http://localhost:3002/', {
      crossdomain: true,
      responseType: 'json',
    }
    )
      .then((res) => {
        const data = parse(res.data)
        console.log(data)

      }).catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <div className='px-5'>
      <NavbarMain />
      <div className='mt-5'>
        <Recomended/>
      </div>
    </div>
  )
}

export default Main