import className from "classnames";
import { GoSync } from "react-icons/go";

interface ButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
    outline?: boolean;
    rounded?: boolean;
    loading?: boolean;
    className?: string;
    onClick?: () => void;
}

export function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    loading,
    onClick,
    ...rest
}: ButtonProps) {
    const classes = className(
        rest.className,
        "flex items-center px-6 py-4 border h-8 rounded",
        {
            "opacity-80": loading,
            "font-bold text-white bg-amber-500": primary,
            "border-gray-900 bg-gray-900 text-white": secondary,
            "border-green-500 bg-green-500 text-white": success,
            "border-yellow-400 bg-yellow-400 text-white": warning,
            "border-red-500 bg-red-500 text-white": danger,
            rounded: rounded,
            "bg-white": outline,
            "text-blue-500": outline && primary,
            "text-gray-900": outline && secondary,
            "text-green-500": outline && success,
            "text-yellow-400": outline && warning,
            "text-red-500": outline && danger,
        }
    );

    return (
        <button
            {...rest}
            disabled={loading}
            className={classes}
            onClick={onClick}>
            {loading ? <GoSync className="animate-spin" /> : children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger,
    }: ButtonProps) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            return new Error(
                "Only one of primary, secondary, success, warning, danger can be true"
            );
        }
    },
};
