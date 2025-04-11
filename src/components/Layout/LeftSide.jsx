
import React from 'react';
import LeftIconsAndCategory from './LeftIconsAndCategory';
import LeftCategory from './LeftCategory';

const LeftSide = () => {
    return (
        <div className=' flex gap-5'>
            <LeftIconsAndCategory/>
            <LeftCategory/>
        </div>
    );
};

export default LeftSide;