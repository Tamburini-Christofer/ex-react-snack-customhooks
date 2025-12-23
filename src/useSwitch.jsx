import { useState } from "react";

function useSwitch(valoreIniziale = false) {
    const [valore, setValore] = useState(valoreIniziale);

    function toggle() {
        setValore((prev) => !prev);
    }

    return [valore, toggle];
}

export default useSwitch;