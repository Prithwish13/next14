import React from 'react'

const ReviewDetails = ({params}: {
    params: {
        id: string;
        reviewId: string
    }
}) => {
  return (
    <div>
        <h1>This is the review of {params.id} and review id {params.reviewId}</h1>
    </div>
  )
}

export default ReviewDetails 
