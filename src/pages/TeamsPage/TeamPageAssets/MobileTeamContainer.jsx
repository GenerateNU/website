import React from 'react'
import '../style.css'

import Row from 'react-bootstrap/esm/Row'
import NavBar from '../../../component/NavBar'
import Footer from '../../../component/Footer/HorizontalFooter'
import NextPage from '../../../component/NextPage'

export default function MobileTeamContainer({ children }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }
    return child
  })
  return (
    <div className='d-flex flex-row' tab-index='0'>
      <Row className='flex-nowrap'>
        <div className='intro-navbar'>
          <NavBar />
        </div>
        <div className='d-flex flex-column'>
          {childrenWithProps}
          <Footer />
          <NextPage pageName='Projects' url='/projects' />
        </div>
      </Row>
    </div>
  )
}
