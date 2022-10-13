import React from "react";
import classes from './Paginator.module.css'

           
const Paginator = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div>
                {slicedPages.map(p =>
                    <span className={props.currentPage === p ? classes.selected : ''}
                        key ={p} onClick={() => { props.onPageChanged(p) }}
                    >{p}</span>
                )}
            </div>
            </div>
    )
                }

export default Paginator;             