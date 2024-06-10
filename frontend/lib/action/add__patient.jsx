'use server'

import React from 'react'

export default async function add__patient (e) {
    const db = await connectToDatabase() ;
    console.log(db) ;

  return (
    <div className="">
        hii
    </div>
  )
}
