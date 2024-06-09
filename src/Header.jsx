import logo from "/src/assets/logo.jpg"
 
function Header(){
   return(
       <>
        <nav>
           <div className="icons">
               <img src={logo} alt="" />
               <h4>GeeksFood</h4>
           </div>
           <div className="menu">
               <ul>
                   <li>Home</li>
                   <li>Quote</li>
                   <li>Resturants</li>
                   <li>Foods</li>
                   <li>Contact</li>
               </ul>
           </div>
           <button className="btn">Get Started</button>
        </nav>
       </>
   )
}
export default Header;