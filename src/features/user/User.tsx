import { LiaUser } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../UI/components/Button";

function User() {
  const { user, logout, isAuthenticated } = useAuth();
  function handleLogout() {
    logout();
  }
  console.log(isAuthenticated);
  return (
    <div className="flex items-center">
      {isAuthenticated ? (
        <div className="flex items-center gap-2">
          <p className="text-sm whitespace-nowrap">Hey {user?.name}</p>
          <Button className="text-xs h-6 px-2 py-1" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <NavLink className="h-6" to="/login">
          <LiaUser className="w-6 h-6" />
        </NavLink>
      )}
    </div>
  );
}

export default User;
