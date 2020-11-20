export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const plusAction = () => {
    return {
        type: INCREMENT
    }
}

export const minusAction = () => {
    return {
        type: DECREMENT
    }
}