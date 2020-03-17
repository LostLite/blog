import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Card from '../UI/Card/'
import './style.css'
import {data} from '../../data/blog.json'

const Sidebar = (props) => {

    const [postList, setPost] = useState([]);
    useEffect(() => {
        setPost(data);
    },[postList]);

    return (
        <div className="sidebarContainer">
            <Card style={cardStyle}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://www.nation.co.ke/image/view/-/1756512/medRes/494827/-/a4p3ly/-/Amina+Mohamed+px.jpg" alt="Profile" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse odit fugiat libero natus ex cupiditate aliquam ut, velit eveniet veritatis voluptatum debitis hic, sunt at laboriosam ipsum temporibus dolorem.
                    </p>
                </div>
            </Card>
            <Card style={cardStyle}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={cardStyle}>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>
                <div className="recentPosts">
                    {
                        postList.map(post => {
                            return(
                                <NavLink to={`/posts/${post.id}`} key={post.id}>
                                    <div className="recentPost" >
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                    
                </div>
            </Card>
        </div>
        
    )
}

const cardStyle = {
    marginBottom:'20px', 
    padding: '20px', 
    boxSizing:'border-box'
}

export default Sidebar;