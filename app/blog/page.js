// app/page.js
import { gql } from '@apollo/client';
import client from '../lib/apolloClient';
import Link from 'next/link';
import Article from '../components/Article/Article';



export default async function Home() {
  // Fetch data on the server
  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
           nodes {
      title
      excerpt
      slug
      date
      commentCount
      id
    }
        }
      }
    `,
    fetchPolicy: 'no-cache', // Ensure fresh data fetch
  
  });


  const posts = data.posts.nodes;

  console.log('new data');
  console.log(posts);

  return (
    <>
      
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Article increments={index + 1}  title={post.title} date={new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} comments={post.commentCount} image={'../../images/demo.jpg'} alt='no description' body={post.excerpt} key={post.id} postslug={post.slug}/>
          
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </>
  );
}

export const revalidate = 10;

