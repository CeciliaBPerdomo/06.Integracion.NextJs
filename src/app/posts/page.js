import React from 'react'
import Link from 'next/link'

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!response.ok) {
        throw new Error("Fallo la obtencion de datos, men!")
    }

    return response.json()
}

const Posts = async () => {

    const posts = await getPosts()
    return (
        <div className='container m-auto mt-6'>
            <h1>Posts</h1>
            <hr />
            <ul>
                {posts.map((post) => (
                    <Link href={`/posts/${post.id}`}>
                    <li
                        key={post.id}
                        className='my-4 ml-8 list-disc'
                    >
                        <b>
                            {post.title}
                        </b>: {post.body}
                    </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Posts