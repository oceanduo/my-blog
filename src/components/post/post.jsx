import './post.scss'


export default function Post() {
    return (
        <div className='post'>
        <div className='imgContainer'>
        <img src='https://picsum.photos/600/600?random=3' alt='' />
        </div>
            


<div className='postInfo'>
<div className='postCategory'>
                <span>html </span> <span> css</span>
            </div>
            <h2 className='postTitle'> how to write beautiful script </h2>
            <hr />
            <span className='postDate'>2 days ago</span>
</div>
            


            <p className='postDetail'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

            

        </div>
    )
}
