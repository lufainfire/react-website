import React from 'react';

const Home = () => {
    return (
        <div className="home bg-blue-100 p-8 min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
                Welcome to Beach Volleyball
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-xl mx-auto">
                Discover the world of beach volleyball! From exciting tournaments to
                beginner tips, we've got it all.
            </p>
        </div>
    );
};

export default Home;
