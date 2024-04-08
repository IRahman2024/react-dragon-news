import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        (fetch('/data/categories.json'))
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div className="grid">
            <h1 className="text-2xl">All category</h1>
            {
                categories.map((category, idx) =>{
                    return <Link className="p-4 text-xl font-semibold hover:bg-slate-500" 
                    to={`/category/${category.id}`} key={idx}>{category.name}</Link>
                })
            }
        </div>
    );
};

export default LeftSideNav;