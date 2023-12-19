// hooks
import React, { useState } from 'react';
// mockdata
import { transformedData } from '../../mockdata/data';
// components
import SearchInput from '../components/SearchInput';
import ColorCard from '../components/ColorCard';

const Home = () => {
    const [query, setQuery] = useState('');
    const [selectedCards, setSelectedCards] = useState([]);

    const filteredData = transformedData.filter((data) =>
        data.title && data.title.toLowerCase().includes(query.toLowerCase())
    );

    const handleCardSelect = (cardTitle) => {
        if (selectedCards.includes(cardTitle)) {
            setSelectedCards(selectedCards.filter((title) => title !== cardTitle));
        } else {
            setSelectedCards([...selectedCards, cardTitle]);
        }
    };

    return (
        <div>
            <div className="input_container">
                <SearchInput setQuery={setQuery} />
            </div>
            <div className='select_card'>
                <span>Select Fruits:</span> {selectedCards.join(', ')}
            </div>
            <div className="card_container">
                {filteredData.map((data, index) => (
                    <ColorCard
                        key={index}
                        data={data}
                        isSelected={selectedCards.includes(data.title)}
                        setSelect={() => handleCardSelect(data.title)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
