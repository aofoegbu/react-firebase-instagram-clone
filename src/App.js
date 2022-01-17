import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase-config';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  return (
    <div className="App">
      <div className="app_header">
        <img  className="app_headerImage" src='https:www.instagram.com/statc/images/web/mobile' alt='Instagram Logo' />
      </div>
      
      <h1> Hello guys, Welcome to Ogelo's Instagram Clone</h1>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

    
    </div>
  );
}

export default App;
