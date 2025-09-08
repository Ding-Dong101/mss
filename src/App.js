import Profile from "./components/profile";
import QuickActions from "./components/quick-actions";
import ProfileLowSection from "./components/profile_low_section";
import "./css/App.css";

function App() {
  return (
    <div className="container">
      <header>
        <Profile />
        <QuickActions />
        <ProfileLowSection />
      </header>
    </div>
  );
}

export default App;
