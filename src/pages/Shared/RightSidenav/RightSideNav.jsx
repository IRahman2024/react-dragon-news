import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="grid gap-2">
                <p className="font-semibold text-3xl">Login With</p>
                <button className="btn btn-outline btn-accent w-full">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
            <div className="grid mt-2">
                <p className="font-semibold text-2xl">Connect With Us</p>
                <a className="flex items-center p-5 border rounded-t-lg" href="https://facebook.com">
                    <FaFacebook />
                    Facebook
                </a>
                <a className="flex items-center p-5" href="https://Twitter.com">
                    <FaTwitter />
                    Twitter
                </a>
                <a className="flex items-center p-5 border rounded-b-lg" href="https://instagram.com">
                    <FaInstagram />
                    Instagram
                </a>
            </div>
            <div className="grid gap-2 mt-2">
                <p className="text-3xl font-semibold">qZone</p>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;