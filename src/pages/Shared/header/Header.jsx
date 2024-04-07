import moment from 'moment';
import logo from '../../../assets/logo.png'
import BreakingNews from '../../Home/BreakingNews';
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalisim without fear</p>
            <p className="text-xl ">{moment().format('dddd, MMMM D, YYYY')}</p>
            <BreakingNews></BreakingNews>
        </div>
    );
};

export default Header;