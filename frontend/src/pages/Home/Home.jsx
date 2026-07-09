import Hero from "../../components/Hero/Hero";
import ServicesPreview from "../../components/ServicesPreview/ServicesPreview";
import ProximoLanzamiento from "../../components/ProximoLanzamiento/ProximoLanzamiento";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
    <main className={styles.home}>
      <Hero />
      <ServicesPreview />
      <ProximoLanzamiento />

      </main>
    </>
  );
}

export default Home;