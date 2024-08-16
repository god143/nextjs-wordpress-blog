"use client"; // This makes the component a Client Component

import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import styles from './CommentForm.module.css';


const SUBMIT_COMMENT = gql`
mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
        success
        comment {
            id
            content
        }
    }
}
`;

export default function CommentForm({ postId, parentId = null}) {
    const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [submitComment, { loading, error, data}] = useMutation(SUBMIT_COMMENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitComment({
        variables: {
            input: {
                content,
                author, 
                authorEmail: email,
                contentId: postId,
                parent: parentId
            }
        }
    });
    setAuthor('');
    setEmail('');
    setContent('');

   
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your Comment"
        required
      />
      <button type="submit" disabled={loading}>
        {parentId ? 'Reply' : 'Submit Comment'}
      </button>
      {error && <p className={styles.error}>{error.message}</p>}
      {data && <p className={styles.success}>Comment submitted successfully!</p>}
    </form>
  );
}