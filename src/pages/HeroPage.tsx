import {useParams} from "react-router";

export const HeroPage=()=>{

    //useParams is a react router hook to get url params
    const urlParams=useParams();
    const {slug}=urlParams;

    return (
        <div>HeroPage slug: {slug} </div>
    )
}