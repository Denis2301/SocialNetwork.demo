import { useEffect, useState } from "react";
import objStyle from "./Paginator.module.css";
import cn from "classnames";
export const Paginator = ({
    onPageChanged,
    currentPage,
    totalItemsCount,
    pageSize,
    portionSize,
}) => {
    let countPage = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(countPage / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    useEffect(() => {
        let newPortion = Math.ceil(currentPage / portionSize);

        if (newPortion !== portionNumber) {
            setPortionNumber(newPortion);
        }
    }, [currentPage]);
    return (
        <div className={cn(objStyle.pagination)}>
            {portionNumber > 1 && (
                <button
                    className={objStyle.prevButton}
                    onClick={() => setPortionNumber(portionNumber - 1)}
                >
                    PREV
                </button>
            )}
            {pages
                .filter(
                    (p) =>
                        p >= leftPortionPageNumber &&
                        p <= rightPortionPageNumber
                )
                .map((p) => {
                    return (
                        <span
                            key={p}
                            onClick={() => {
                                onPageChanged(p);
                            }}
                            className={cn({
                                [objStyle.selectedPage]: currentPage === p,
                            })}
                        >
                            {p}
                        </span>
                    );
                })}
            {portionNumber < portionCount && (
                <button
                    className={objStyle.nextButton}
                    onClick={() => setPortionNumber(portionNumber + 1)}
                >
                    NEXT
                </button>
            )}
        </div>
    );
};
