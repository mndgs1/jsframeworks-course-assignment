interface ValidateResponse {
    isValid: boolean;
    message: string;
    reqLength?: number;
    value: string;
    type: string;
}

export function useValidate({ reqLength, value, type }: ValidateResponse) {
    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (type === "email") {
        if (emailRegex.test(value) === false) {
            return "Invalid email address";
        }
        return { isValid: true, message: `${type} is valid` };
    }

    if (reqLength) {
        if (value?.length < reqLength) {
            return {
                isValid: false,
                message: `${type} must be at least ${reqLength} characters`,
            };
        }
        return { isValid: true, message: `${type} is valid` };
    }
}
