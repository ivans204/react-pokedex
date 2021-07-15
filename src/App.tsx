import { useEffect, useRef } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';

function App() {
    const naslov = useRef<HTMLHeadingElement>(null);

    const entry = useIntersectionObserver(naslov, {});
    console.log(entry);

    useEffect(() => {
        if (entry?.isIntersecting) console.log('use function');
    }, [entry?.isIntersecting]);

    return (
        <div className="App">
            <h1 ref={naslov}>naslov</h1>
        </div>
    );
}

export default App;
