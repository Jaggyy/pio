import React from 'react'
import logo from '../image/logo.png'
import {
  BsSearch
} from 'react-icons/bs'

function Header() {
  return (
    <div className="Header"
      style={{
        maxWidth: "100vw",
        maxHeight: "110px",
        display: "flex",
        flexDirection: "column"
      }}>
      <div className="Header-top"
        style={{
          maxWidth: "100%",
          height: "10%",
          background: "orange",
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 70px"
        }}>
        <div className="top-left">
          <p style={{
            fontSize: "14px",
            fontWeight:"500"
          }}>MON, 24 MAY 2022</p>
        </div>
        <div className="topright" style={{
          color: "black"
        }}>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
        </div>
      </div>
      <div className="Header-bottom"
        style={{
          maxWidth: "100%",
          height: "90%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 40px"
        }}>
        <div className="Header-logo"
        style={{
          width:"10%"
        }}>
          <img src={logo} alt="logo"
            width={55} />
        </div>
        <div className="others"
          style={{
            width: "50%",
            height: '100%',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <div className="list-link-component"><p>Home</p></div>
          <div className="list-link-component"><p>Tech</p></div>
          <div className="list-link-component"><p>Entertainment</p></div>
          <div className="list-link-component"><p>Finace</p></div>
        </div>
        <div className="list-link-component"
          style={{
            display: "flex"
          }}>
          <div className="search">
            <input placeholder='Search...' />
            <div className="searchicon">
              <BsSearch color='orange' fontSize={20}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header