import React from "react";
import Menu from "../components/Menu"
import {Link} from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

const Single = () => {
    return (<div className='single'>
        <div className="content">
            <img src="https://imgd-ct.aeplcdn.com/0x0/n/enfqg3a_1573837.jpg?q=75" alt="" />
            <div className="user">
                <img src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" alt="" />
                <div className="info">
                    <span>John</span>
                    <p>Posted 2 days ago</p>
                </div>
                <div className="edit">
                    <Link to={`/write?edit=2`}>
                    <img src={Edit} alt="" />
                    </Link>
                    <img src={Delete} alt="" />
                </div>
            </div>
            <h1>The Sturdy Jeep</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga magnam est molestiae excepturi aperiam possimus quia sed ratione ipsum quam velit neque nam adipisci nulla quod temporibus, quos esse soluta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque praesentium repellat laboriosam odit corrupti laborum iusto obcaecati ullam. Labore debitis aperiam non deserunt numquam voluptatem expedita rem sequi consectetur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, explicabo? Ut saepe eaque, quas voluptate minima, omnis, aliquid iure nam in quaerat eius consectetur cupiditate accusantium accusamus sequi enim ea.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatem quisquam ipsum quod aperiam provident nisi unde quam itaque alias doloribus obcaecati repellendus molestias tempore laborum eos quis, in vel!
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis facere vero voluptatem deleniti totam praesentium ex dignissimos placeat. Est minima rerum quia consectetur, ea earum atque maxime nemo odit id.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ducimus quibusdam nam pariatur expedita maxime, deleniti modi deserunt neque nobis, omnis illum tempora nesciunt quae. Sed fugit reiciendis quis ea!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates eius vitae necessitatibus perspiciatis deserunt nam iusto, quaerat voluptas sed totam blanditiis dolorem sunt corrupti? Nemo in eligendi repudiandae ea?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores deserunt sit suscipit blanditiis beatae modi, aut nostrum totam dolorem provident consequatur, voluptatum exercitationem fugit iure? Dolorum eos sit neque cumque!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ratione eos a! Aliquid eligendi quisquam, atque perspiciatis, modi praesentium unde nemo deserunt doloremque aspernatur ea odit magnam reiciendis dolor perferendis!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio est consequatur recusandae architecto, tempore quibusdam magnam tenetur unde maiores impedit, ea saepe soluta pariatur? Dolorem sequi neque recusandae aperiam nihil.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ducimus debitis necessitatibus ab, ex quae alias, eveniet libero itaque consectetur, repellat dolorum possimus reiciendis? Sunt tempore consequatur eos minima exercitationem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut asperiores amet in voluptatibus voluptas fuga soluta dolor itaque impedit, laborum, recusandae totam modi ex, eligendi voluptates eum cumque inventore eaque?
            </p>
        </div>
        <Menu/>
    </div>);
    };

export default Single;