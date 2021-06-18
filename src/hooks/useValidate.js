import { useState, useEffect } from 'react';

const useValidate = (conditions = []) => {
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (conditions) {
            for (const condition of conditions) {
                if (!condition) {
                    setValidated(false);
                    return;
                }
            }
            setValidated(true);
        }
    }, [conditions]);

    return validated;
}

export default useValidate;
