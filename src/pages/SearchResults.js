import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Card from './Card'; // Adjust the import path as necessary
import { useParams } from 'react-router-dom';

const SearchResultsPage = () => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const { query } = useParams();
    const resultsPerPage = 100; // Assuming each page will have 100 results

    const fetchResults = useCallback(() => {
        const apiURL = `http://localhost:8080/api/v1/search?query=${query}&page=${page}&limit=${page === 1 ? 20 : resultsPerPage}`;
        axios.get(apiURL)
            .then((res) => {
                setTotalPages(Math.ceil(res.total / resultsPerPage)); // Assuming API returns a total count
                if (page === 1) {
                    setResults(res.data);
                } else {
                    setResults(prev => [...prev, ...res.data]);
                }
            })
            .catch((error) => console.error("Failed to fetch data:", error));
    }, [query, page]); 

    useEffect(() => {
        fetchResults();
    }, [fetchResults]);

    // Render page numbers
    const renderPageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button key={i} onClick={() => setPage(i)} className={`px-4 py-2 ${page === i ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded`}>
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="bg-gray-900 min-h-screen">
            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-5">
                    {results.map(result => (
                        <Card
                            key={result._id}
                            image={result.poster}
                            title={result.title}
                            year={result.year}
                        />
                    ))}
                </div>
                {page === 1 && (
                    <button
                        onClick={() => setPage(prev => prev + 1)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Load More
                    </button>
                )}
                
                {/* Pagination */}
                <div className="flex justify-center space-x-2 mt-4">
                    {renderPageNumbers()}
                </div>
            </div>
        </div>
        
    );
};

export default SearchResultsPage;