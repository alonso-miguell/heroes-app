import {Link, Outlet} from "react-router";

export const HeroLayout= ( )=>{
    return (
        <div className="bg-red-600">
            <h1> HeroLayout</h1>
            <ul>
                <li><Link to={"/"}>Link to HomePage</Link> </li>
                <li><Link to={"/search"}>Link to Search</Link> </li>
                <li><Link to={"/hero/1"}>Link to Hero</Link> </li>
            </ul>
            <Outlet/>

        </div>
    )
}