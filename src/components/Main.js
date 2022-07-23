import React from 'react'

export default function Main() {
  return (
    <>
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex              lg:justify-center">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Say hello to ReactJS
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            You will lern how to use <br />
            the most popular frontend library <br />
            and become a super Ninja developer.
          </p>
          <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Awsome!
      </button>
          
        </div>
        
      </div>
      
    </div>
    
    </>
  );
}
