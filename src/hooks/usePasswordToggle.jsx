import { useState } from "react";
import { FaEye as Show, FaEyeSlash as Hide } from "react-icons/fa6";

export const usePasswordToggle = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [icon, setIcon] = useState(Show)

    const handleToggle = () => {
        if (showPassword) {
            setShowPassword(false);
            setIcon(Show);
        } else {
            setShowPassword(true);
            setIcon(Hide);
        }
    };

    return { showPassword, icon, handleToggle }
}