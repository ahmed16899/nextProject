import React from 'react';
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
    const { data: session, status } = useSession();
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
              {!session && <Link
                className="nav-link"
                href="/api/auth/signin"
                onClick={() => signIn()}>
                <span>Sign in</span>
              </Link>}
              
              </li> 
              <li className="nav-item">
              {session && 
                <Link
              className="nav-link"
              href="/api/auth/signout"
              onClick={() => signOut()}>
              <span>Sign Out</span>
            </Link>
            }
              
            </li>
              
            </ul>
          </div>
        </div>
      </nav>
        </>
    );
};

export default Navbar;