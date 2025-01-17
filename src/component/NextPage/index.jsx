import './style.css'
import Arrow from '../../assets/images/nextpage/arrow.svg'

export default function NextPage(props) {
  return (
    <div className='nextPage'>
      <a className='nextPageButton' href={props.url}>
        <img src={Arrow} className={'nextPageArrow'} alt='arrow icon' />
        <span className={'nextPageName'}>{props.pageName}</span>
        <img src={Arrow} className={'nextPageArrow'} alt='arrow icon' />
      </a>
    </div>
  )
}
