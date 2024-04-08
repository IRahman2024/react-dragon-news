import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, author, image_url, details, rating, total_view, _id } = news;

    return (
        <div>
            <div className="border-x">
                <div className="flex items-center p-4 bg-slate-400">
                    <div><img className="w-9 rounded-full mr-3" src={author.img} alt="" /></div>
                    <div>
                        <p className="text-xl font-bold">{author.name}</p>
                        <p className="text-sm text-gray-500">{author.published_date}</p>
                    </div>
                </div>
                <div className="mx-3">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <img className="my-3" src={image_url} alt="" />

                    {
                        details.length > 200 ?
                            <p className="text-gray-300 text-base">{details.slice(0, 200)} 
                            <Link to={`/news/${_id}`} 
                            className="text-orange-500">Read more..</Link></p> :
                            <p className="text-gray-300 text-base">{details}</p>

                    }

                </div>
                <div className="flex justify-between border-y my-4 py-3">
                    <div>
                        <div className="flex gap-1 items-center">
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                            <div className="text-sm">{rating.number}</div>
                        </div>
                    </div>
                    <div className="flex gap-1 text-sm items-center mr-2">
                        <MdRemoveRedEye />
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;