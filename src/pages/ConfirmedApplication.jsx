import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ConfirmedApplication = () => {
  const navigate = useNavigate()
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold text-center'>Your Application Has Been Submitted!</h1>
      <button className='bg-green-600 hover:bg-green-700 p-3 rounded-lg text-white mt-5' onClick={()=> navigate('/')}>Back to Home Page!</button>
    </div>
  )
}

export default ConfirmedApplication
