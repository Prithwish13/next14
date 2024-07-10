"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const ReviewPage: React.FC = () => {
  const params = useParams<{id: string}>()
  return (
    <div>
        <h1> this is review list of {params.id} blog</h1>
    </div>
  )
}

export default ReviewPage
