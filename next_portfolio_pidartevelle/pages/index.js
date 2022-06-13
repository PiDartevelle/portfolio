import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Intro />
      <About />
      <ProjectList />
    </Layout>
  );
}
