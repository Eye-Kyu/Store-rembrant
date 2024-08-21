import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'

function HomePage() {
  return (
  
      
    <MainLayout>
    <div className='bg-light ps-5 pt-4 pb-3 rounded-4'>
                <h1 className="display-4">Welcome to DevPOS!</h1>
                <p className="lead">A simple point-of-sale application built with React and Redux.</p>
                <p className="lead">Incase of any Inquiries, contact +254 110 xxx 929  </p>
                <Link to="/pos" className="btn btn-primary ">Start Selling</Link>
                </div>
    </MainLayout>

    
  )
}

export default HomePage