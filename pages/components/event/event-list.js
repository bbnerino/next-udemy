import React, { useEffect } from 'react'
import { getFeaturedEvents } from '../../../helpers/api-util'
import EventItem from './event-item'
import classes from './event.module.css'

const EventList = ({events}) => {

  return (
    <div className={classes.item}>
      <h1>events</h1>
      {events && events.map((event)=>
      <EventItem key={event.id} item={event}/>
      )}
    </div>
  )
}

export default EventList
