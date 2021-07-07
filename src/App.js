import React, {useEffect, useState} from 'react'
import Posts from './components/posts';
import Pagination from './components/pagination';
import axios from 'axios'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentpage, setCurrentPage] = useState(1)
  const[postsperpage] = useState(5)
   
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const response = await axios.get("https://newsapi.org/v2/top-headlines?q=india&apiKey=819e5e59d29346c490ae9ed66356b2dd")
      setPosts(response.data.articles)
      setLoading(false)
    }
    fetchPosts()
  }, [])
  
  const indexofLastpost = currentpage*postsperpage
  const indexofFirstpost = indexofLastpost-postsperpage
  const currentPosts = posts.slice(indexofFirstpost, indexofLastpost) 

  //change page
  const paginate = number => setCurrentPage(number)

  return (
    <div className='container mt-5'>
    <h1 className='text-primary mb-3' style={{paddingLeft:"40%"}}>News App</h1>
    <Posts posts={currentPosts} loading={loading} />
    <Pagination postsperpage={postsperpage} totalposts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
