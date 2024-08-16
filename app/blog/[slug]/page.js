// app/blog/[slug]/page.js
import { gql } from '@apollo/client';
import client from '../../lib/apolloClient';
import styles from './page.module.css';
import CommentForm from '../../components/CommentForm/CommentForm'; // Import CommentForm component


const POST_QUERY = gql`
  query Post($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      commentCount
      comments {
        nodes {
          id
          content
          date
          author {
            node {
              name
              email
            }
          }
          replies {
            nodes {
              id
              content
              date
              author {
                node {
                  name
                  email
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ALL_POSTS_QUERY = gql`
  query AllPosts {
    posts {
      nodes {
        slug
      }
    }
  }
`;


export async function generateStaticParams() {
  const { data } = await client.query({
    query: ALL_POSTS_QUERY,
  });

  return data.posts.nodes.map(post => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }) {
  const { slug } = params;
  const { data } = await client.query({
    query: POST_QUERY,
    variables: { slug },
  });

  const post = data.postBy;

  return (
    <article className={styles.articleFeatured}>
      <h2 className={styles.articleTitle}>{post.title}</h2>
      {post.featuredImage && (
        <img
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText}
          className={styles.articleImage}
        />
      )}
      <p className={styles.articleInfo}>
        {new Date(post.date).toDateString()} |{' '}
        {post.commentCount !== 0
          ? `${post.commentCount} Comments`
          : 'No Comments'}
      </p>
      <div
        className={styles.articleBody}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

<section className={styles.commentsSection}>
        <h3>Comments</h3>
        {post.comments.nodes.length > 0 ? (
          post.comments.nodes.map(comment => (
            <div key={comment.id} className={styles.comment}>
              <p className={styles.commentAuthor}>{comment.author.node.name}</p>
              <p className={styles.commentDate}>{new Date(comment.date).toLocaleDateString()}</p>
              <div
                className={styles.commentContent}
                dangerouslySetInnerHTML={{ __html: comment.content }}
              />
              {comment.replies.nodes.length > 0 && (
                <div className={styles.replies}>
                  {comment.replies.nodes.map(reply => (
                    <div key={reply.id} className={styles.reply}>
                      <p className={styles.commentAuthor}>{reply.author.node.name}</p>
                      <p className={styles.commentDate}>{new Date(reply.date).toLocaleDateString()}</p>
                      <div
                        className={styles.commentContent}
                        dangerouslySetInnerHTML={{ __html: reply.content }}
                      />
                    </div>
                  ))}
                </div>
              )}
              <CommentForm postId={post.id} parentId={comment.id} />
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </section>

      {/* Comment Form for New Comments */}
      <CommentForm postId={post.id} />
    </article>
  );
}
