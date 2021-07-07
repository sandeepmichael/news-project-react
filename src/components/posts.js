import React from 'react'


const Posts = ({posts, loading}) => {
    if(loading) {
  return <h2>loading...</h2>
    }

 
        
    return (
    <div className='App'>
        <ul className='List-group mb-4'>
        {posts.map((post, i) => (
          <li key={i} className='List-group-item' style={{border:'1px solid black'}}>
              <a href={post.url}><h1>{post.title}</h1></a>
              <p>{post.description}</p>
              <img className='news-img' style={{padding:'1%'}} width={400} src={post.urlToImage} alt='NewImage' />

          </li>
        ))}
          </ul>
            </div>
    )
            
    
    
}

export default Posts
