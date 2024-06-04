import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HomeNav from "../HomeNav";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {}
  }
  return (
    <>
      <HomeNav />
      <div className="profile-div">
        <Card>
          <div className="icon-container">
            <i class="fa-solid fa-user" id="icon"></i>
          </div>
          <Card.Body>
            <Card.Title>Profile:</Card.Title>
            <Card.Text>Email: {currentUser.email}</Card.Text>
            <Button variant="primary" className="profile-button">
              Update profile
            </Button>
            <Button
              variant="primary"
              className="profile-button"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Profile;
