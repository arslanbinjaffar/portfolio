import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, download as logo, menu } from "../assets";
import { navLinks } from './../constants/index';
import {styles} from '../styles';
import styled from "styled-components";
import {primaryColor} from '../global/colors'
const Navbar = () => {
  const [active,setActive]= useState("")
  const [toggle,setToggle]= useState(false)
  return ( 
    <Wrapper className={`${styles.paddingX}`}>
    <div className="header">
      <Link to={"/"} className="logo" onClick={()=>{setActive("");window.scrollTo(0,0)}}>
        <img src={logo} alt={"logo_img"} className="logo-img"/>
        <p className="logo-name mb-0">Arslan &nbsp;
        <span> || Web developer </span></p>
      </Link>
      <ul className="nav-list mb-0">
        {navLinks.map(({id,title})=>{
          return(
            <li key={id}
            className={`${active===title?"text-white":"text-secondary"} nav-list-item`}
            onClick={()=>{setActive(title)}}> 
            {title}</li>
          )
        })}
      </ul>
      <div className="mobile-menu">
        <img src={toggle?close:menu} alt="menu" className="mobile-menu-icon" onClick={()=>setToggle(!toggle)}/>
        <div className="mobile-menu-list" style={{display:`${toggle?"block":"none"}`}}>
        <ul className="mb-0 ">
        {navLinks.map(({id,title})=>{
          return(
            <li key={id}
            className={`${active===title?"text-white":"text-secondary"} nav-list-item`} onClick={()=>{setActive(title);setToggle(!toggle)}}> 
            {title}</li>
          )
        })}
      </ul>
        </div>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.nav`
  display:flex;
  align-items:center;
  width: 100%;
  position: fixed;
  top: 0%;
  padding:0 20px;
  z-index: 20;
  background-color:${primaryColor};
  .header{
    margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 700px;
   width: 100%;
   max-width: 1280px ; 
  }
  .logo{
    display: flex;
   align-items: center;
   gap: 8px ;
   padding:10px;
   text-decoration: none;
   .logo-img{
    width:50px;
    object-fit: contain;
   }
   .logo-name{
    color: #FFFFFF;
    font-size: 18px;
    @media (max-width:592px){
      span{
        display: none;
      }
    }
   }
  }
  .nav-list{
    list-style: none;
    display: flex;
    gap: 40px;
    
    @media (max-width:592px){
        display: none;
    }
    &-item{
      font-size: 18px;
      font-weight: 500;
      transition: all 0.3s;
      &:hover{
        cursor: pointer;
        color:#FFFFFF!important;
      }
    }
  }
  .mobile-menu{
    display: none;
    @media (max-width:592px){
         display: flex;
         flex-grow: 1;
         justify-content: end;
         align-items: center;
    }
    &-icon{
      width: 28px;
      height: 28px;
      object-fit: contain;
      cursor: pointer;
    }
    &-list{
      padding: 24px;
      position: absolute;
      top: 20%;
      right: 0;
      margin:8px 16px;
      min-width: 140px;
      border-radius:12px; 
      z-index: 10;
      ul{
        
        background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
        list-style: none;
        display:flex; 
        justify-content:flex-end; 
        align-items:flex-start;
        flex-direction:column;
        gap:40px;
        padding:0 20px;
        li{
          font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
        }
      }
    }
  }
`
export default Navbar