import {React, useContext} from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { onHomePageContext } from '../../weatherContext';
const DetailHeader = ({cityName}) => {
    const setOnHomePage = useContext(onHomePageContext)
    const handleClick = (e) => {
        e.stopPropagation()
        setOnHomePage(true)
    }
    return (
        <div className='w-full bg h-10 flex justify-between p-2 mt-2 mb-2'>
            <ArrowBackIosNewOutlinedIcon onClick={e => handleClick(e)} sx={{fontSize:16}}></ArrowBackIosNewOutlinedIcon>
            <span className=' text-base font-medium'>{cityName}</span>
            <MoreHorizOutlinedIcon sx={{fontSize: 18}}></MoreHorizOutlinedIcon>
        </div>
    );
};

export default DetailHeader;