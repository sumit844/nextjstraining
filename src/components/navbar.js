import React from 'react'
import Link from 'next/link'
function Navbar() {
    return (
        <div className='row bg-secondary'>
            <nav class="navbar navbar-expand-lg text-white">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link class="nav-link text-white" href="/">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-white" href="/about">About Us</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-white" href="/facilities">Our Facilities</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-white" href="/courses">Our Courses</Link>
                            </li><li class="nav-item">
                            <Link class="nav-link text-white" href="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-white" href="/batches/2">Batches</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    )
}

export default Navbar
