import { Outlet } from 'react-router-dom';
import Navbar from './nav/Navbar';
import './layout.css'
import Canvas from '../components/Canvas';
import Footer from './footer/Footer';
function DashboardLayout(){

    return (
        <div >
            <Canvas />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
      );
}



export default DashboardLayout;