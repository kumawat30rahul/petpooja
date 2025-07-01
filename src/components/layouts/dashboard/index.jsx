import React from 'react'
import TopNavbar from '../../navbars/topNavbar'
import NavbarTools from '../../navbars/components/tools'

const DashboardLayout = () => {
  return (
    <div>
        <TopNavbar />
        <div className='block md:hidden w-full'>
          <NavbarTools />
        </div>
    </div>
  )
}

export default DashboardLayout