import React, { useEffect } from 'react';

const SearchResultList = ({searchValue}) => {
    useEffect(() => {
        fetch('/src/component/city.list.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log("error"))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default SearchResultList;