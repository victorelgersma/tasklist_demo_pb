import React, { useEffect } from 'react'
import client from '../lib/pocketbase'


export default function Home() {
  useEffect(() => {
    client.collection("tasks").getFullList().then(res => console.log(res))  
  }, [])
  return (
    <div>Home</div>
  )
}
