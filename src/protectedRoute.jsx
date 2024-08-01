import {auth} from "./firebaseConfig";
import {Navigate} from "react-router-dom";
function ProtectedRoute({children}) {
    return auth.currentUser ?children : <Navigate to="/signup" />
}

export default ProtectedRoute