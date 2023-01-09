import React from "react";

const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "//images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFtYm98ZW58MHx8MHx8&w=1000&q=80",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ];

    return(
        <div className="menu">
            <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={post.img} alt={post.title}/>
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
        </div>
    )
}

export default Menu