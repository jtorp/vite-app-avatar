import React, { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import axios from 'axios'
import Item from './Item'

const Home = () => {
  const [items, setItems] = useState()
  const proxyUrl = "/api/v1/"

  useEffect(() => {
    async function loadItems() {
      await axios
        .get(`${proxyUrl}items`)
        .then((res) => setItems(res.data))
        .catch((err) => {
          console.log(err);
        })
    }

    loadItems();

  }, []);

  const likeItem = ({ id }) => {
    console.log(`liked ${id}`)
  }
  const itemActions = {
    likeItem
  }
  return (
    <div className='my-40 h-screen flex justify-center items-center gap-3 '>
      {/* <div className=" max-w-2xl border cursor-pointer h-80">   
       <Spline scene="https://prod.spline.design/7Bxw9DdMUFig9flo/scene.splinecode" /> 
      </div> */}

      <section className='max-w-7xl flex flex-wrap items-center justify-center bg-gray-800 rounded py-10'>
        {items ? items.map((item) => (
          <div key={`image-${item.id}`} className="px-4 py-10">
            <Item className="relative" item={item} {...itemActions}></Item>
          </div>
        )) : <h2> nothing </h2>}
      </section>
    </div>
  )
}

export default Home