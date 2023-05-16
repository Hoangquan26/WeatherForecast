import {React, useState} from 'react';
import SearchInput from './SearchInput';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = ({cityName}) => {
    const [onFind, setOnFind] = useState(false)
    const handleClick = () => {
        setOnFind(!onFind)
    }
    return (
        <div className='w-full bg h-auto'>
        {!onFind ?
            <div className='flex text-gray-700 justify-between p-2 pl-4 pr-4 items-center mt-4'>
                <div className=' flex items-center'>
                    <LocationOnIcon></LocationOnIcon>
                    <span>{cityName ?? 'Not Found'}</span>
                </div>
                <SearchIcon onClick={handleClick} className=' cursor-pointer'></SearchIcon>
            </div>
            : 
            <SearchInput handleClick={handleClick} onFind={onFind}></SearchInput>
        }
        </div>
    );
};

export default Header;