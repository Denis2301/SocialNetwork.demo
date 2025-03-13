import objStyle from "./Paginator.module.css";
export const Paginator = ({
    onPageChanged,
    currentPage,
    totalUsersCount,
    pageSize,
}) => {
    let countPage = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    return (
        <div className={objStyle.pagination}>
            {pages.map((p) => {
                return (
                    <span
                        onClick={(e) => {
                            onPageChanged(p);
                        }}
                        className={
                            currentPage === p ? objStyle.selectedPage : ""
                        }
                    >
                        {p}
                    </span>
                );
            })}
        </div>
    );
};
