import "./home.scss"
import Header from '../../components/header/header'

import Posts from "../../components/posts/Posts"

import Sidebar from "../../components/sidebar/Sidebar"

export default function Home() {
  return (
    <>
<Header/>

<div className="main">
    <Posts/>
    <Sidebar/>
</div>

    </>
    
  )
}
