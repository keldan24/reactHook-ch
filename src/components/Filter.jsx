import { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleFilter = () => {
        const filteredRating = rating ? parseFloat(rating) : null;
        onFilter({ title, rating: filteredRating });
    };

    const handleClear = () => {
        setTitle('');
        setRating('');
        onFilter({ title: '', rating: null }); 
    };

    return (
        <div className="filter">
            <div className='inputs'>
                <input
                    type="text"
                    placeholder="Filter by title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Filter by rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="10"
                />
            </div>
            <div className='buttons'>
                <button onClick={handleFilter} disabled={!title && !rating}>Apply Filter</button>
                <button onClick={handleClear}>Clear Filters</button>
            </div>
        </div>
    );
};

export default Filter;
