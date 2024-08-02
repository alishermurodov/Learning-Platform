'use client'
import { ButtonBr } from '@/shared/ui/button'
import React from 'react'
import './header.css'
import Image from 'next/image'
import { Logo } from '@/shared/assets/icons'
import { SearchInput } from '@/shared/ui/searchInput'

export const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo-div">
                <Logo />
                <p>MyCourse.io</p>
            </div>
            <div className="search-contant">
                <SearchInput/>
            </div>
            <ButtonBr
                className='custom-button'
            >
                {'Login'}
            </ButtonBr>

        </div>
    )
}
