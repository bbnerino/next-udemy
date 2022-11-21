import Image from 'next/image'
import React from 'react'

const EventItem = ({item}) => {
  console.log(item)
  return (
    <div>
      <h1>{item.title}</h1>
      <Image height={100} width={100} src={`/${item.image}`} alt='image'/>
      <p>{item.location}</p>
      <p>{item.description}</p>
      <p>{item.date}</p>
    </div>
  )
}

export default EventItem
