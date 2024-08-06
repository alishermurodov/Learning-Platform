'use client'
import { ButtonBr } from '@/shared/ui/button'
import React from 'react'
import './header.css'
import Image from 'next/image'
import { Cart, Logo, Timelapse } from '@/shared/assets/icons'
import { SearchInput } from '@/shared/ui/searchInput'
import { IconButton } from '@/shared/ui/iconButton'

export const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo-div">
                <Logo />
                <p>MyCourse.io</p>
            </div>
            <div className="header-items">
                <div className="search-contant">
                    {/* <SearchInput/> */}
                    <input
                        type="search"
                        placeholder='Search for course...'
                    />
                </div>
                <p>Become Instructor</p>
                <div className="cart">
                    <Cart />
                    <p>6</p>
                </div>
                <ButtonBr
                    className='custom-button'
                >
                    {'Login'}
                </ButtonBr>
                <IconButton
                    startIcon={<Timelapse />}
                    className='sign-up-btn'
                >
                    {'Sign Up'}
                </IconButton>
            </div>
        </div>
    )
}
