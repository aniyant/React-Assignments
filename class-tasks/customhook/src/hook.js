import { useState } from "react";

export const useToggle = (initialState) => {
    const [state,setState] = useState(initialState);
    return [state,setState];
}