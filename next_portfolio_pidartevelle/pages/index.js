import About from "../components/About";
import Chat from "../components/Chat";
import DisplayProjects from "../components/DisplayProjects";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Intro />
      <About />
      {/* <DisplayProjects />
      <Chat /> */}
    </Layout>
  );
}
