import { useParams } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSidenav/RightSideNav";
import Header from "../Shared/header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const { id, pos } = useParams();//this is used to get dynamic link id from outside

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md: grid-cols-4 mt-3">
                <div className="col-span-3">
                    
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;