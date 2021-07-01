import { useEffect, useState } from 'react';

// Function created to get the window size inside react;
export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    //wait for the page to be build to save the values "height" and "width"
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    //return the values to be used in any component;
    return size;
}