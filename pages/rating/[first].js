import React from 'react'
import { useRouter } from 'next/router'

const first = () => {
  const router = useRouter()
  const {first} = router.query
  return (
    <div>hello from dynamic route : {first}</div>
  )
}

export default first