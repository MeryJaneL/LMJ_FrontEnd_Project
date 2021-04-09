import { useCallback, useState } from "react";

function useInputObject<K>(initialValue : K)
    : [K, (e : React.ChangeEvent<HTMLInputElement>)=>void, () => void]{
        const [form, setForm] = useState<typeof initialValue>(initialValue);
        const onChange = useCallback( (e) =>{
            const {name, value} = e.target;
            setForm(form => ({...form, [name] : value}));
        }, []);
        
        const reset = () => setForm(initialValue);

        return [form, onChange, reset]
}

export default useInputObject;