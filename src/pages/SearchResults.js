import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Card from './Card';
import { useParams } from 'react-router-dom';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';

const SearchResultsPage = () => {
    const [results, setResults] = useState([]);
    const { query } = useParams();

    const [scrollIndexes, setScrollIndexes] = useState({
        title: 0,
        genres: 0,
        cast: 0,
        directors: 0,
        plot: 0,
    });

    const fetchResults = useCallback(() => {
        const apiURL = `http://localhost:8080/api/v1/search?query=${query}`;
        axios.get(apiURL)
            .then((res) => {
                setResults(res.data);
            })
            .catch((error) => console.error("Failed to fetch data:", error));
    }, [query]);

    useEffect(() => {
        fetchResults();
    }, [fetchResults]);

    useEffect(() => {
        document.body.className="bg-[#131720]";

        fetchResults();

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [fetchResults]);

    const renderMoviesByHighlight = (highlight) => {

        const filteredMovies = results.filter(movie => movie.highlights.includes(highlight));
        if (filteredMovies.length === 0) {
            return null;
        }
        const visibleCount = 5; // Number of items you want visible in the scroll at once
        const startIndex = scrollIndexes[highlight];
        const endIndex = startIndex + visibleCount;
        const visibleMovies = filteredMovies.slice(startIndex, endIndex);

        const handlePrev = () => {
            setScrollIndexes(prevIndexes => ({
                ...prevIndexes,
                [highlight]: Math.max(0, prevIndexes[highlight] - visibleCount),
            }));
        };

        const handleNext = () => {
            setScrollIndexes(prevIndexes => ({
                ...prevIndexes,
                [highlight]: Math.min(filteredMovies.length - visibleCount, prevIndexes[highlight] + visibleCount),
            }));
        };

        return (
            <div className="bg-[#131720] mt-8">
                <h2 className="text-white text-2xl font-bold mb-4">Movies Based on {highlight.charAt(0).toUpperCase() + highlight.slice(1)}</h2>
                <div className="flex space-x-4 overflow-x-auto justify-start items-center">
                    <button onClick={handlePrev} disabled={startIndex === 0} className="text-white">
                        <SlArrowLeftCircle />
                    </button>
                    {visibleMovies.map((movie) => (
                        <Card
                            id={movie._id}
                            image={movie.poster}
                            title={movie.title}
                            directors={highlight === 'directors' ? (movie.directors?.join(', ') || '') : undefined}
                            cast={highlight === 'cast' ? (movie.cast?.join(', ') || '') : undefined}
                            search="yes"
                        />
                    ))}
                    <button onClick={handleNext} disabled={endIndex >= filteredMovies.length} className="text-white">
                        <SlArrowRightCircle />
                    </button>
                </div>
            </div>
        );
    };


    return (
        <div className="bg-[#131720]">
            <div className="container mx-auto px-4 h-full">
                {['title', 'genres', 'cast', 'directors', 'plot'].map((highlight) =>
                    renderMoviesByHighlight(highlight)
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;