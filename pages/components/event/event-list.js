import React, { useEffect } from 'react'
import EventItem from './event-item'
import classes from './event.module.css'

const EventList = ({items}) => {
  useEffect(() => {
   console.log(items)
  }, [items])
  return (
    <div className={classes.item}>
      {items && items.map((event)=><EventItem key={event.id} item={event}/>)}
    </div>
  )
}

export default EventList

