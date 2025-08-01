import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export default function mergeClasses(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}