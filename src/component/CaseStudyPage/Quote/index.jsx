import './style.css'
import { ReactComponent as quotebottom } from './quotemarksbottom.svg'
import { ReactComponent as quotetop } from './quotemarkstop.svg'
import { SvgIcon } from '@mui/material'

export default function Quote({ isDesktop, casestudy }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '15vw',
        marginRight: '15vw',
        paddingBottom: '10vw'
      }}
    >
      <SvgIcon
        component={quotetop}
        inheritViewBox
        sx={{
          fontSize: isDesktop ? 48 : '4vw',
          color: 'yellow',
          marginRight: isDesktop ? '1vh' : ''
        }}
      />
      <div className='cs-client-quote-style'>{casestudy.clientQuote}</div>
      <SvgIcon
        component={quotebottom}
        inheritViewBox
        sx={{
          fontSize: isDesktop ? 48 : '4vw',
          color: 'yellow',
          marginLeft: 'auto'
        }}
      />
    </div>
  )
}
