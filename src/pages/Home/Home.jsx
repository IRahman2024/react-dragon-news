import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSidenav/RightSideNav";
import Header from "../Shared/header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-6xl mb-10">This is home</h2>
            <div className="grid md: grid-cols-4 gap-6">
                <div className="border"><LeftSideNav></LeftSideNav></div>
                <div className="col-span-2 border">
                    <h2 className="text-4xl">News Comming Soon</h2>
                </div>
                <div className="border"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;