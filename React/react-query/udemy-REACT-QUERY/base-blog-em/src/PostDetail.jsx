import { useQuery } from "react-query";
import {useMutation } from "react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  // replace with useQuery
  console.log(fetchComments(post.id));
  const { data, isError, error, isLoading } = useQuery(["comments", post.id], () =>
    fetchComments(post.id)
  );


const deleteMutation = useMutation((postId)=>{deletePost(postId)})


  if (isLoading) return <h3>isloading...</h3>; // 데이터의 비동기 처리로 인해 undefined가 나올 수 있음.
  if (isError)
    return (
      <>
        <h3>Ops, someting went wrongs</h3>
        <p>{error.toString()}</p>
      </>
    );
  console.log(data);

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={()=> deleteMutation.mutate(post.id)}>Delete</button> <button>Update title</button>
      {deleteMutation.isError && (
        <p style = {{color : "purple"}}>Error deleting the post</p>
      )}
      {deleteMutation.isLoading && (
        <p style = {{color : "red"}}>deleting the post</p>
      )}
      {deleteMutation.isSuccess && (
        <p style = {{color : "green"}}>Post has (not) been deleted</p>
      )}      
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
