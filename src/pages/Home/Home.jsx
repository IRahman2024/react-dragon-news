import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSidenav/RightSideNav";
import Header from "../Shared/header/Header";
import { useLoaderData } from 'react-router-dom';
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-6xl mb-10">This is home</h2>
            <div className="grid md: grid-cols-4 gap-6">
                <div className="border"><LeftSideNav></LeftSideNav></div>
                <div className="col-span-2">
                    <h2 className="text-4xl">
                        {
                            news.map((news, idx) => <NewsCard key={idx} news={news}></NewsCard>)
                        }
                    </h2>
                </div>
                <div className="border"><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;