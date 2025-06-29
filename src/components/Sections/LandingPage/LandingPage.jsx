import { Address } from "./Components/Address";
import { Events } from "./Components/Events";
import { History } from "./Components/History";
import { Home } from "./Components/Home";

export function LandingPage(params) {
  return (
    <div className="slide-up" id="landing-section">
      <Home />
      <History />
      <Events />
      <Address />
    </div>
  );
}
