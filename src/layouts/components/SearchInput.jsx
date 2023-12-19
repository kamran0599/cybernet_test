import React from 'react';

const SearchInput = ({ setQuery }) => {
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className='input'>
            <input type="text" onChange={handleChange} placeholder='Search Color' />
        </div>
    );
};

export default SearchInput;
