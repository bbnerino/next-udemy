export const  getAllEvents = async()=>{
  const response = await fetch("https://next-udemy-1420a-default-rtdb.firebaseio.com/events.json")
  const data = await response.json()
  const events = []
  for (const key in data){
    events.push({
      id:key,
      ...data[key]
    })
  }
  return events
}

// export const getEvent = async(eventId)=>{
//   const response = await fetch(`https://next-udemy-1420a-default-rtdb.firebaseio.com/events/${eventId}.json`)
//   const data = await response.json()
//   return data
// }

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents()
  return allEvents.filter((event) => event.isFeatured);
}

// export const getEventById = async(eventId)=>{
//   const event = await getEvent(eventId)
// }
export async function getEventById(id) {
  const allEvents = await getAllEvents()
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const allEvents = await getAllEvents()

  const { year, month } = dateFilter;

  let filteredEvents = await allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}