import { keyframes } from '@emotion/react';

const Loading = () => {
    
    return (
        <div className=' fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-20 transition-all'>
            <span className=' animate-spin h-12 w-1 bg-white relative after:h-2 after:bg-black after:bottom-0 after:absolute after:w-2 after:-left-1 after:rounded-full before:h-2 before:bg-black  before:absolute before:top-0 before:w-2 before:-left-1 before:rounded-full'></span>
        </div>
    );
};

export default Loading