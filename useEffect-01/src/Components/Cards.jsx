import React, { useEffect, useState } from 'react'
import { API } from '../Constants'
import ImagesCards from './ImagesCards'

const Cards = () => {
  const [authorData, setAuthorData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [filterdArray, setFilterdArray] = useState(authorData)
  useEffect(() => {
    const getData = async () => {
      const rowData = await fetch(API)
      const json = await rowData.json()
      // console.log(json)
      setAuthorData(json)
      setFilterdArray(json)
    }
    getData()
  }, [])

  return (
    <>
      <div className="w-full bg-sky-600 flex justify-center items-center px-4 py-4 shadow-lg">
        <input
          onChange={ (e) => {
            // console.log(e.target.value);            
            setSearchValue(e.target.value)
            const arr = authorData.filter((item) => {
              return item.author.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setFilterdArray(arr)
          }}
          value={searchValue}
          type="text"
          className="px-4 py-2 rounded-lg w-1/3 border-2 border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500 flex items-center"
          placeholder="Search..."
        />
      </div>
      <div className='grid grid-cols-4 w-fit mx-auto'>
        {
          filterdArray.map((item) => {
            const { author, download_url } = item
            return <ImagesCards name={author} image={download_url} />
          })
        }
      </div>
    </>
  )
}

export default Cards

