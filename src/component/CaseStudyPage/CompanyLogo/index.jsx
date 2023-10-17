export default function CompanyLogo({ isDesktop, casestudy }) {
  return (
    <div
      style={{
        backgroundColor: casestudy.companyLogo.bgColor,
        height: '200px',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img src={casestudy.companyLogo.image} width='300vw' />
    </div>
  )
}
