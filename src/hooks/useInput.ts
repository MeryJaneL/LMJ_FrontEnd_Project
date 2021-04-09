import { useCallback, useState } from "react";

function useInput<K>(initialValue : K)
    : [K, (e : React.ChangeEvent<HTMLInputElement>)=>void, () => void]{
        const [value, setValue] = useState<typeof initialValue>(initialValue);
        const onChange = useCallback( (e) =>{
            setValue(e.target.value);
        }, []);
        
        const reset = () => setValue(initialValue);

        return [value, onChange, reset]
}

export default useInput;