import { useState } from "react";
import blogArray from "./components/blogArray";

const BlogList = (props) => {
const [blogs, setBlogs] = useState(blogArray);
const [visible, setVisible] = useState(true);

const deleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
}

if (blogs.length === 0 && visible) {
    setVisible(false);
}

    return (
        <div className="blog-list">
            <h2>{visible ? props.title : null}</h2>
            {blogs.length != 0 ?
                (
                    blogs.map(blog => (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.name}</h2>
                            <p> {blog.body}</p>
                            <p>Written by: {blog.author}</p>
                            <button onClick={() => deleteBlog(blog.id)}>delete blog</button>
                        </div>
                    ))
                ) :
                (
                    <>
                    <h2>No Blogs to Show</h2>
                    </>
                )
            }
        </div>
    )
}

export default BlogList;