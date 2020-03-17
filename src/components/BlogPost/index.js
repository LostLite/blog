import React, {useState, useEffect} from 'react';
import Card from '../UI/Card/';
import './style.css';
import {data} from '../../data/blog.json'

const BlogPost = (props) => {
    const [post, setPost] = useState({
        id:'',
        blogCategory: '',
        blogTitle: '',
        postedOn: '',
        author:'',
        blogImage: '',
        blogText: ''
    });
    //useEffect is always called after render
    useEffect(() => {
        const id = props.match.params.id;
        const post = data.find(p => p.id == id);
        setPost(post);
    },[props.match.params.id]);
    if(post.blogImage == '') return null;

    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
                </div>
                <div className="postImageContainer">
                    <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="Blog Post" />
                </div>
                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost;