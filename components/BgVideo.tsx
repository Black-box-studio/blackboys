import React from 'react';

const BgVideo = () => {
    return (
        <div className="relative top-0 w-full h-full">
            <video  autoPlay loop muted className="rotated-180  absolute w-full h-full object-cover ">
                <source src="/public/blackhole.webm" type="video/webm" />
            </video>
        </div>
    );
};

export default BgVideo;