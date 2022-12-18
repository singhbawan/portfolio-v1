import { Outlet } from 'react-router-dom';



function DashboardLayout(){

    return (
        <div>
            <h1>heading 1</h1>
            <Outlet />
            <h1>Footer heading 2</h1>
        </div>
      );
}



export default DashboardLayout;