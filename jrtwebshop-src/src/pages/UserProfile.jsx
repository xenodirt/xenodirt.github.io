import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <div id="content">
      <h1 id="content-title">profile</h1>

      <div id="content-blocks">
        <section className="profile-card">
          <div className="profile-header">
            <img
              className="profile-avatar"
              src="images/user_profile_picture.jpg"
              alt="User avatar"
            />
            <div className="profile-heading">
              <h2 className="profile-name">John Rudcel Taer</h2>
              <p className="profile-subtitle">Member since 2026</p>
            </div>
          </div>

          <dl className="profile-details">
            <div className="profile-detail">
              <dt>Email</dt>
              <dd>johnrudcel.taer@xenodirt.com</dd>
            </div>
            <div className="profile-detail">
              <dt>Country</dt>
              <dd>Philippines</dd>
            </div>
            <div className="profile-detail">
              <dt>Status</dt>
              <dd>Active</dd>
            </div>
            <div className="profile-detail">
              <dt>Mobile Number</dt>
              <dd>09083773657</dd>
            </div>
            <div className="profile-detail">
              <dt>Home Address</dt>
              <dd>812 Dank Rd.</dd>
            </div>
          </dl>

          <div className="profile-actions">
            <Link className="profile-btn" to="/sign-up">
              Edit profile
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}