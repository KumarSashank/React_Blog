import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const posts=[
        {
            id:1,
            title:"bnlala",
            desc:"heiugrhrgiu",
            img:"https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFtYm98ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id:2,
            title:"bnlala",
            desc:"heiugrhrgiu",
            img:"https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFtYm98ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id:3,
            title:"bnlala",
            desc:"heiugrhrgiu",
            img:"https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFtYm98ZW58MHx8MHx8&w=1000&q=80"
        },
    ];
        return (
        <div className="home">
            <div className="posts">
                {posts.map((post)=>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>Read more</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        );
    }

export default Home;