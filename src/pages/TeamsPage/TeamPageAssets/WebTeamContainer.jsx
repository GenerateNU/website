import React from 'react'
import '../style.css'

import Row from 'react-bootstrap/esm/Row'
import NavBar from '../../../component/NavBar'
import Footer from '../../../component/Footer'
import NextPage from '../../../component/NextPage'

export default function WebTeamContainer({ children }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }
    return child
  })
  return (
    <div className='vh-100 bg-white container-fluid' tab-index='0'>
      <Row className='flex-nowrap'>
        <div className='teams-navbar'>
          <NavBar />
        </div>
        {childrenWithProps}
        <Footer />
        <NextPage pageName='Projects' url='/projects' />
      </Row>
    </div>
  )
}
