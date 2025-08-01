import mergeClasses from "@/utils/mergeClasses";

interface GridProps{
    children: React.ReactNode,
    className?: string,
    column?: boolean,
    numCols?: number,
    numRows?: number
}

export default function Grid({children, className, column, numCols, numRows=1}: GridProps){
    return(
        <div className={mergeClasses(`grid grid-rows-${numRows}`, {[`grid-cols-${numCols}`]:column})}>
            {children}
        </div>
    )
}