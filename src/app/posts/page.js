import React from 'react'

const Posts = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()

    return (
        <div className='container m-auto mt-6'>
            <h1>Posts</h1>
            <hr />
            <ul>
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className='my-4 ml-8 list-disc'
                    >
                        <b>
                        {post.title}
                        </b>: {post.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts