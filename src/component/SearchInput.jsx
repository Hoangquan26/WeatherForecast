import React, { useState, useContext, useRef, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchResult from './SearchResult';
import SearchResultList from './SearchResultList';
import { currentCityContext, setCurrentCityContext } from '../weatherContext';
const SearchInput = ({handleClick}) => {
    const [text, setText] = useState('')
    const ref = useRef(null)
    useEffect(()=>{
        ref.current.focus()
    },[])
    const handleType = (e) =>{
        setText(e.target.value)
    }
    const setCurrentCity = useContext(setCurrentCityContext)
    const currentCity = useContext(currentCityContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        handleClick()
        setCurrentCity(text)
    }
    return (
        <form onSubmit={e => handleSubmit(e)} className='flex flex-col text-gray-700 p-2 fixed top-0 left-0 h-full w-full'>
            <div className='rounded-md p-2 bg-white z-10 h-11 flex items-center  m-2'>
                <input ref={ref} onChange={(e) => {handleType(e)}} placeholder='Search' className='h-full w-full outline-none pl-1'></input>
                <CloseIcon onClick={handleClick} className=''></CloseIcon>
            </div>
            {/* <SearchResultList searchValue={1}></SearchResultList> */}
            <div className=' absolute top-0 left-0 h-full w-full bg-indigo-300'></div>
        </form>
    );
};

export default SearchInput;