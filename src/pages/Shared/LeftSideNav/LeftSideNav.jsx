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
        <div>
            <h1 className="text-2xl">All category</h1>
            {
                categories.map((category, idx) =>{
                    <Link key={idx}>{category.name}</Link>
                })
            }
        </div>
    );
};

export default LeftSideNav;