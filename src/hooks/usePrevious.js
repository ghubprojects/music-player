import { useEffect, useRef } from 'react';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => (ref.current = value), [value]);
    return ref;
}

export default usePrevious;
