import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../routes/ProtectedRoute";

export default function TeacherRoute() {
    return (
        <ProtectedRoute>
            <Outlet />
        </ProtectedRoute>
    )
}