import { Outlet, Link } from "react-router-dom";

export default function Adminnavbar() {
    return (
        <>
        

                                    <nav className="mainmenu-nav">
                                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                    <li><a href="#"><i className="feather-home"></i><span>
                        
                        <Link to="/dashboard">Dashboard</Link>      </span></a></li>

                    <li><a href="#"><i className="feather-book-open"></i><span>       <Link to="/add-category">               Add Category  </Link>     </span></a></li>
                    <li><a href="#"><i className="feather-bookmark"></i><span><Link to="/view-category">   Category List </Link> </span></a></li>

                    <li><a href="#"><i className="feather-star"></i><span><Link to="/add-report">       Add Report </Link></span></a></li>
                    

                    <li><a href="#"><i className="feather-help-circle"></i><span><Link to="/view-report"> Report List</Link></span></a></li>
                    <li><a href="#"><i className="feather-shopping-bag"></i><span><Link to="/logout"> Logout</Link></span></a></li>
                                        </ul>
                                    </nav>









                             
        </>
    )
}