import { useState } from "react";

const useToggler = () => {
    const [isToggled, setIsToggled] = useState(false);

    const open = () => {
        setIsToggled(true);
    }

    const close = () => {
        setIsToggled(false);
    }

    const toggle = () => {
        setIsToggled(prev => !prev);
    }
    
    return { isToggled, toggle, open, close, setIsToggled };
};

export default useToggler;