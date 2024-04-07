import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary btn-sm">Breaking news</button>
            <Marquee pauseOnHover={true}>
                cause baby I got Bad Blood
            </Marquee>
        </div>
    );
};

export default BreakingNews;