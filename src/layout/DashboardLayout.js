import { Outlet } from 'react-router-dom';
import Navbar from './nav/Navbar';
import './layout.css'
import Canvas from '../components/Canvas';

function DashboardLayout(){

    return (
        <div >
            <Canvas />
            <Navbar />
            <Outlet />
            <h1>Footer heading 2</h1>
        </div>
      );
}



export default DashboardLayout;