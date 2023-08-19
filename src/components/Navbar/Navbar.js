import React from 'react'
import {styled} from 'styled-components'
import {Link,NavLink} from "react-router-dom"
import "./Navbar.scss"
function Navbar() {
  
   const [click,setClick]=React.useState(false)

   const handleClick=()=>{
    setClick(!click)
   }
  return (
    <Nav>
       <Logo>
         <Link to="/" style={{color:"var(--primary)"}} >
           Feastastic
         </Link>
         </Logo>

         <div className="menu-icon" onClick={handleClick} >
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
         </div>
      

       <ul className={click ? "nav-menu active" : "nav-menu"}>
         <li>
         <NavLink to="/" >
           <span>Home</span>
         </NavLink>
         </li>
         <li>
            <NavLink  to="/" >
            <span>My Recipes</span>
            </NavLink>
         </li>

         <li>
         <NavLink to="/" >
           <span>Cuisines</span>
         </NavLink>
         </li>

         <li>
         <NavLink to="/" >
           <span>Meal Types</span>
         </NavLink>
         </li>

         <li>
         <NavLink to="/" >
           <span>All Recipes</span>
         </NavLink>
         </li>

         <SearchBar>
          
          <input type="text" placeholder='Search Recipes...' />
          <SearchButton>
          <img src="/images/search.svg" alt=""/>
          Search
          </SearchButton>
       </SearchBar>
       </ul>

       
    </Nav>
  )
}


const Nav=styled.nav`
position:fixed;
position:relative;
z-index:1000;
top:0;
right:0;
left:0;
height:12vh;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 3rem;
${'' /* z-index:3; */}
background:var(--accent);
 

 @media only screen and (max-width:1040px){
  ${'' /* flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  height:100vh;
  width:100vw;
  overflow-y:hidden; */}
  height:12vh;
  align-items:center;
  position:relative;
  width:100%;
  ${'' /* overflow-x:hidden; */}
  
 }


`

const Logo=styled.a`
padding:0;
cursor:pointer;
color:var(--primary);
font-size:1.7em;
font-family: 'Playfair Display', serif;
justify-self:start;
font-weight:bold;

@media only screen and (max-width:1040px){
  position:absolute;
  top:0;
  left:0;
  transform:translate(25%,50%);
}
`

const SearchBar=styled.div`
padding:6px;
border: 1px solid #B99B6B; /* Tan */
border-radius: 5px; 
display:flex;
margin-left:11rem;

@media only screen and (max-width:1040px){
  margin-left:0;
}

`

const SearchButton=styled.button`
background-color:var(--primary);
color:var(--secondary);
border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  margin-left:1rem;
display:flex;
align-items:center;
justify-content:space-between;

`


// const NavMenu=styled.ul`
// display:flex;
// top:0px;
// justify-content:center;
// align-items:center;
// width:100%;
// max-width:1200px;
// height:100%;
// list-style:none;
// margin:0px;
// margin-right:auto;
// margin-left:25px;
// position:relative;

//  @media only screen and (max-width:1040px){
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   width:100%;
//   height:100vh;
//   top:0px;
//   position:absolute;
//   left:0px;
//   z-index:-3;


//  }

// `

// const NavLinkItem=styled.li`
// margin-right:20px;

  
// span { 
//   font-family:"Raleway",sans-serif;
//       color: var(--secondary);
//       font-size: 13px;
//       letter-spacing: 1.42px;
//       line-height: 1.08;
//       padding: 2px 0px;
//       white-space: nowrap;
//       position: relative;

//       &:before {
//         background-color: rgb(249, 249, 249);
//         border-radius: 0px 0px 4px 4px;
//         bottom: -6px;
//         content: "";
//         height: 2px;
//         left: 0px;
//         opacity: 0;
//         position: absolute;
//         right: 0px;
//         transform-origin: left center;
//         transform: scaleX(0);
//         transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//         visibility: hidden;
//         width: auto;
//       }
//     }

//     &:hover {
//       span:before {
//         color:var(--accent);
//         transform: scaleX(1);
//         visibility: visible;
//         opacity: 1 !important;
//       }
//     }
  

// `



export default Navbar