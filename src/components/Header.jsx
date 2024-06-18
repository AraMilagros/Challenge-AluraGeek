import React from 'react'

export default function Header() {
    return (
        <header id="header">
            <div className='header__hearts'>
                <span className='heart'>
                    <i className="fa-solid fa-heart"></i>
                </span>
                <span className='heart'>
                    <i className="fa-solid fa-heart"></i>
                </span>
                <span className='heart'>
                    <i className="fa-solid fa-heart"></i>
                </span>
            </div>

            <h1 className='header__tittle'>AluraGeek</h1>
        </header>
    )
}
