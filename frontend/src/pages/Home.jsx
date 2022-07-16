import { Navbar, Search, Cards, Footer } from '../components';

function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="pb-16 min-w-[375px]">
        <Search />
        <Cards />
        <Footer />
      </main>
    </>
  );
}

export default Home;
