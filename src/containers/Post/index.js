import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';


const index = (props) => {
    return (
        <section className="container">
            <BlogPost {...props} />
            <Sidebar/>
        </section>
    )
}

export default index;