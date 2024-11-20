import React, { useEffect, useState } from 'react'
import { API } from '../Constants'
import ImagesCards from './ImagesCards'

const Cards = () => {
  useEffect(() => {
    const getData = async () => {
      const rowData = await fetch(API)
      const json = await rowData.json()
      console.log(json)
      setAuthor(json)
    }
    getData()
  }, [])
  const [author, setAuthor] = useState([])
  return (
    <>
      <h1>NH3</h1>
      <div className='bg-red-400 grid grid-cols-4 w-fit mx-auto'>
        {
          author.map((item) => {
            const { author, download_url } = item
            return <ImagesCards name={author} image={download_url} />
          })
        }
      </div>
    </>
  )
}

export default Cards

