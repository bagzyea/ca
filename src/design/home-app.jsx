// Constitutional Africa — Homepage composition
const { Nav, Hero, Proposition, Pillars, Framework, Conversations, Archive, Founder, Brief, Footer } = window;

function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Proposition />
        <Pillars />
        <Framework />
        <Conversations />
        <Archive />
        <Founder />
        <Brief />
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
