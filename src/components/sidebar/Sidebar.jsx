import './sidebar.scss'

export default function Sidebar() {
  return (
    <div className='sideContainer'>

      <div className='sideTitle'>
        <h2>ABOUT ME</h2>
        <img src='https://picsum.photos/300/300?random=2' alt='' />
        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using. </p>


      </div>

      <div className='sideItems'>
        <h2>CATEGORIES</h2>

        <ul>
        <li> Html </li>
        <li> Css </li>
          <li> Javascript</li>
          <li> React</li>
          <li>API</li>
          <li> APP</li>
          <li> Full Stack </li>
        </ul>
          

        

        <h2>CONTACT ME</h2>


      </div>

     
    </div>
  )
}
