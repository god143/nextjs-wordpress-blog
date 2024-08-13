// app/page.js

import { gql } from '@apollo/client';
import client from '../lib/apolloClient';
import Link from 'next/link';

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
          }
        }
      }
    `,
  });

  const posts = data.posts.nodes;

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <article key={post.slug}>
            <h2>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </article>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}
