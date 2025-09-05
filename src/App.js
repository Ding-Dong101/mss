import Profile from "./components/profile";
import QuickActions from "./components/quick-actions";
import Profile_low_section from "./components/profile_low_section";
import "./css/App.css";

function App() {
  return (
    <div className="container">
      <header>
        <Profile />
        <QuickActions />
        <Profile_low_section />
      </header>
    </div>
  );
}

export default App;
