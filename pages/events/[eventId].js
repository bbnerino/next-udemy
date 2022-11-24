import React from 'react'
import { getAllEvents, getEventById, getFeaturedEvents } from '../../helpers/api-util'
import EventItem from '../components/event/event-item'

const EvnetDetail = (props) => {
  return (
    <div><EventItem item={props.event}/></div>
  )
}

export default EvnetDetail

export const getStaticProps = async(context)=>{
  const eventId = context.params.eventId
  const data = await getEventById(eventId)
  return ({
    props:{
      event : data
    },
    revalidate:30
  })
}

export const getStaticPaths = async ()=>{
  const data = await getFeaturedEvents()

  const pathWithParams = data.map(event=>({params:{eventId:event.id}}))
  return ({
    paths:pathWithParams,
    fallback:true
  })
}