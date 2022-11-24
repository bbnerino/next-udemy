import React,{useEffect} from 'react'
import { getAllEvents, getFeaturedEvents } from '../../helpers/api-util'
import EventList from '../components/event/event-list'

const EventPage = (props) => {
  useEffect(() => {
    console.log('event1',props.events)
   }, [])
  return (
    <div>
      <EventList events={props.events}/>
    </div>
  )
}

export default EventPage


export const getStaticProps= async () =>{
  // const data = await getFeaturedEvents()
  const data = await getAllEvents()

  if(data.length===0){
    return({
      notFound:true
    })
  }
  return {
    props:{
      events:data,
    },
    revalidate:600
  }
}
