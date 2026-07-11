import Hero from "../../components/Hero/Hero";
import ServicesPreview from "../../components/ServicesPreview/ServicesPreview";
import ProximoLanzamiento from "../../components/ProximoLanzamiento/ProximoLanzamiento";
import CTA from "../../components/CTA/cta";
import CatalogoInvitaciones from "../../components/CatalogoHome/CatalogoHome";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
    <main className={styles.home}>
      <Hero />
      <ServicesPreview />
      <CatalogoInvitaciones />
      <ProximoLanzamiento />
      <CTA />

      </main>
    </>
  );
}

export default Home;