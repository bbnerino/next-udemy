import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../components/event/event-list';

function FilteredEventsPage(props) {
  const router = useRouter();
  if (props.hasError) {
    return (
      <Fragment>
          <p>No events found for the chosen filter!</p>
        <div className='center'>
          <button link='/events'>Show All Events</button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);
  const filteredEvents = props.events

  return (
    <Fragment>
      {/* <ResultsTitl date={date} /> */}
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;

export const getServerSideProps =  async(context)=>{
  const {params} = context
  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) 
  return ({
    props:{hasError:true}
    // notFound:true,
    // redirect:{
    //   destination:'/error'
    // }
  })
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props:{
      events:filteredEvents,
      date:{
        year:numYear,
        month:numMonth
      }
    }
  }
}