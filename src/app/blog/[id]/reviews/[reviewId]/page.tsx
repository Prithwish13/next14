"use client"
import { notFound } from 'next/navigation';
import React from 'react'

function getRandomInt(count: number){
  return Math.floor(Math.random() * count)
}

const ReviewDetails = ({params}: {
    params: {
        id: string;
        reviewId: string
    }
}) => {

  const random = getRandomInt(2)

  if(random === 1) {
    console.log(random)
    throw new Error("Error loading review")
  }

  if(parseInt(params.reviewId) > 1000) {
    return notFound()
  }

  return (
    <div>
        <h1>This is the review of {params.id} and review id {params.reviewId}</h1>
    </div>
  )
}

export default ReviewDetails 
