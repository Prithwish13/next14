import { notFound } from 'next/navigation';
import React from 'react'

const ReviewDetails = ({params}: {
    params: {
        id: string;
        reviewId: string
    }
}) => {

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
