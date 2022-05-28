import Chat from "../components/Chat";
import DisplayProjects from "../components/DisplayProjects";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <h1>A bit about me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum
        iusto illum, obcaecati nobis laudantium vitae, nisi, explicabo corporis
        vel doloremque ad esse. Facilis excepturi quas tempore minus esse
        possimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
        blanditiis eaque nulla consectetur quae earum repellat ipsa, aliquam
        adipisci, dolorem molestias nostrum repudiandae veritatis reiciendis,
        quia numquam suscipit accusamus provident! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Est similique rem iusto praesentium quidem
        omnis dolor nostrum aut quas illo maxime placeat, asperiores tempora
        voluptatum a? Dolorum iusto officiis illo.
      </p>
      <DisplayProjects />
      <Chat />
    </Layout>
  );
}
