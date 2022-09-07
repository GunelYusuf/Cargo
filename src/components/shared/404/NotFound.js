import React from 'react';
import './NotFound.css';
function NotFound() {
    return (
        <div className='container'>
            <div className="md:flex min-h-screen">
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
                    <div className="max-w-sm m-8">
                        <div className="text-black text-5xl md:text-15xl font-black">
                            404
                        </div>
                        <div className="w-16 h-1 bg-purple-light my-3 md:my-6"/>
                        <p className="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal">
                            Sorry, the page you are looking for could not be found. </p>
                        <a href="https://limak.az">
                            <button className="btn404">
                                Go Home
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative pb-full md:flex md:pb-0 md:min-h-screen w-full md:w-1/2">
                    <div className="not absolute pin bg-cover bg-no-repeat md:bg-left lg:bg-center">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;