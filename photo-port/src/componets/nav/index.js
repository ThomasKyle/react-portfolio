import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props; 

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentpage.name);
    }, [currentPage]);

    return (
        <header>
            <h2>Thomas' Portfolio</h2>
            <nav>
                <ul>
                {pages.map((page) =>(
                        <li 
                        className={`mx-1 ${currentPage.name === page.name && 'navActive'}`}
                        key={page.name}>
                            <span onClick={() => setCurrentPage(page.name)}>
                                {capitalizeFirstLetter(page.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;