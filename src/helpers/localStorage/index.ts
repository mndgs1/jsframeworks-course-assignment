export const loadState = () => {
    try {
        const savedState = localStorage.getItem("cart");
        if (savedState === null) {
            return undefined;
        }
        return { cart: JSON.parse(savedState) };
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const savedState = JSON.stringify(state);
        localStorage.setItem("state", savedState);
    } catch (err) {
        // handle errors
    }
};
