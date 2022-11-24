import React,{useState,useEffect,useRef} from 'react';
// import classnames from 'classnames';
// you should import `lodash` as a whole module
import {debounce} from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete() {
  const [searchResults,setSearchResults] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  // const [isError,setIsError] = useState(false)
  
  const debouncedSearch = useRef(
    debounce(async (cri) => {
      if(cri==="") setSearchResults([])
      else{
        setSearchResults(
          await search(cri)
          .catch((err)=>{
            setSearchResults([])
          })
        );
      }
    }, DEBOUNCE_DELAY)
  ).current;

  const search = async (cri) => {
    setIsLoading(true)
    const response = await axios.get(ITEMS_API_URL+`/?q=${cri}`)
    setIsLoading(false)
    return response.data
  }

  const handleChange = async(event)=> {
    debouncedSearch(event.target.value)
  }
  const onSelectItem = (item)=>{
    console.log(item)
  }
  useEffect(()=>{
    return()=>{debouncedSearch.cancel()}
  },[debouncedSearch])
  
  return (
    <div className="wrapper">
      <div className={"control"}>
        <input type="text" onChange={handleChange} className="input" />
      </div>
      <div className="list is-hoverable" >
         {searchResults && searchResults.map((result,idx)=>
            <div key={idx} onClick={()=>{onSelectItem(result)}} className='list-item'>{result}</div>)
         }
      </div>
    </div>
  );
}
