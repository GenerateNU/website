import './style.css'

export default function Tag({ title }) {
  return (
    <div className='tag-container'>
      <div className='tag-text'>{title}</div>
    </div>
  )
}
