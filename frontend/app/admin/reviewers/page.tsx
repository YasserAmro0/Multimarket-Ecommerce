import { CustomTable } from '@/components'
import { HeadersforReviewers } from '@/utils'
import React from 'react'

const page = () => {
  return (
      <div className="w-3/4 p-4">
          <h1 className="text-2xl font-semibold mb-4">Reviewers</h1>
          <CustomTable headers={HeadersforReviewers} />
      </div>  
  )
}

export default page