import React from 'react'

const UserProfile = (props) => {
  return (
    <div>{props.username}</div>
  )
}

export default UserProfile

export const getServerSideProps= (context)=>{
  const {params,req,res} = context
  return{
    props:{username:'max'}
  }
}