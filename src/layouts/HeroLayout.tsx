import {Outlet} from "react-router";

export const HeroLayout= ( )=>{
    return (
        <div className="bg-red-600">
            <h1> HeroLayout</h1>
            <Outlet/>

        </div>
    )
}