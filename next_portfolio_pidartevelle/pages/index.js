import About from "../components/About";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <div>
      <Layout pageTitle="Home">
        <Intro />
        <About />
        <ProjectList />
      </Layout>
    </div>
  );
}
