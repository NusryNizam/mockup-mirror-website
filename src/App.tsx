import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Spacer from "./components/Spacer";
import demoVideo from "./assets/videos/demo.webm";
import logo from "./assets/logo.svg";
import Github from "./assets/icons/github.svg";
import Telegram from "./assets/icons/telegram.svg";

function App() {
  return (
    <div>
      <nav className="nav">
        <img src={logo} />
        <div className="socials">
          <a
            href="https://t.me/MockupMirror"
            target="_blank"
            style={{
              height: 24,
            }}
          >
            <img src={Telegram} width={24} height={24} />
          </a>

          <a
            href="https://github.com/NusryNizam/mockup-mirror-mobile"
            target="_blank"
            style={{
              height: 24,
            }}
          >
            <img src={Github} width={24} height={24} />
          </a>
        </div>
      </nav>
      {/* <Spacer height={44} /> */}
      <section className="main">
        <div className="wrapper">
          <div className="display sora" role="heading">
            Bring your Penpot mockups to life on your Android device!
          </div>
          <Spacer height={16} />

          <div className="description body-small">
            Experience your designs as they’re meant to be seen—on the actual
            screen size of your target device. Preview them offline and in
            real-time, making it easier to perfect every detail.
          </div>

          <Spacer height={24} />

          <div className="cta-container">
            <Button variant="primary" text="Download Now" />
            <Button variant="secondary" text="Watch a Demo" />
          </div>

          <Spacer height={8} />

          <div className="caption light">It's free and open-source</div>
        </div>
        <div className="image-container">
          {/* <img src={Demo} /> */}
          <video src={demoVideo} autoPlay={true} loop={true} />
        </div>
      </section>

      <Spacer height={72} />

      <section>
        <div className="title">Features</div>
        <Spacer height={16} />
        <div className="card-container">
          <Card
            icon="Community"
            heading="Privacy Friendly"
            description="
        Your data doesn't touch any servers. Everything is transferred peer-to-peer offline"
          />
          <Card
            icon="OpenSource"
            heading="Free and Open-Source"
            description="
This software is free and open-source, both the Android app and the web app/plugin"
          />
          <Card
            icon="Connection"
            heading="Quick Design Updates"
            description="
Changes in the design are almost instantly reflected on the app"
          />
          <Card
            icon="Cursor"
            heading="No Sign-up required"
            description="
No need to create user accounts. Use the application right away"
          />
          <Card
            icon="Lightweight"
            heading="Lightweight & Efficient"
            description="
Lightweight and performant Android and web application"
          />
          <Card
            icon="Community"
            heading="Community Support"
            description="
Join the Telegram community to discuss and collaborate among enthusiasts"
          />
        </div>
      </section>

      <Spacer height={72} />

      <section className="banner">
        <div className="title sora">
          Convinced? Why don't you download and see for yourself?
        </div>
        <Button variant="primary" text="Download Now" />
      </section>

      <Spacer height={72} />

      <footer className="footer">
        <a
          href="https://github.com/NusryNizam/mockup-mirror-mobile"
          target="_blank"
        >
          Contribute
        </a>

        <a href="https://t.me/MockupMirror" target="_blank">
          Join the community on Telegram
        </a>

        <a href="https://buymeacoffee.com/nusry" target="_blank">
          Buy me a coffee
        </a>

        <br />
        <a href="https://nusrynizam.com" target="_blank" className="caption">
          Designed and developed by Nusry
        </a>
      </footer>
    </div>
  );
}

export default App;
