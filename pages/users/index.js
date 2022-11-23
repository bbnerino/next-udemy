import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
const UserPage = () => {
  const users = [{id:"hi1",role:"admin"},{id:"hi2",role:"admin"},{id:"hi3",role:"user"},]
  const router = useRouter()
  return (
    <div>
      {users.map((user)=>
        <li key={user.id}><Link href={{pathname:'/user/[role]/[id]',query:{role:user.role,id:user.id}}}>{user.id}</Link></li>
      )}
      <butoton onClick={()=>{router.push('/blog/a/b/c/d')}}>GO</butoton>
    </div>
  )
}

export default UserPage