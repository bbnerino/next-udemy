import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const UserDetail = () => {
  const router = useRouter()
  return (
    <div>
      {JSON.stringify(router.query)}
      <div><li><Link replace href='/user'>user</Link></li></div>
    </div>

  )
}

export default UserDetail