import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function NotFounPage() {

  const router = useRouter();

  useEffect(() => {

    setTimeout(() => {
      router.push("/")

    }, 3000)
  })
  return (
    <div className='text-center p-5'>
      <h1>Hi, Welcome!</h1>
      <p>Please Check your URL. it is wrong. click here to go to the <a href="/">home page</a>.</p>
    </div>
  )
}

export default NotFounPage
