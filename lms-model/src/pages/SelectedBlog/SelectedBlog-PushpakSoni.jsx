import React from 'react'
import { useParams } from 'react-router-dom'

const SelectedBlog = () => {
    const params = useParams()
  return (
    <div>
      Hello Thiis is cars {params.id}
    </div>
  )
}

export default SelectedBlog
