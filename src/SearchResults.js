import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Card from './Card'; // Adjust the import path as necessary

const SearchResultsPage = ({ match }) => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const query = match.params.query; // Assuming you're using react-router-dom

    const fetchResults = useCallback(() => {
        const apiURL = `http://localhost:8080/api/v1/search/suggestions?query=${query}&page=${page}`;
        axios.get(apiURL)
            .then((res) => {
                if (page === 1) {
                    setResults(res.data);
                } else {
                    setResults(prev => [...prev, ...res.data]);
                }
            })
            .catch((error) => console.error("Failed to fetch data:", error));
    }, [query, page]); // Dependencies for useCallback

    useEffect(() => {
        fetchResults();
    }, [fetchResults]); // Now fetchResults is a dependency

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {results.map(result => (
                    <Card
                        key={result.id}
                        image={result.poster}
                        title={result.title}
                        rating={result.imdb.rating}
                        year={result.year}
                        genre={result.genre} // Assuming these fields exist
                        status={result.status} // Assuming these fields exist
                    />
                ))}
            </div>
            <button
                onClick={() => setPage(prev => prev + 1)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Load More
            </button>
        </div>
    );
};


export default SearchResultsPage;