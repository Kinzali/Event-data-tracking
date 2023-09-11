import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Navigation />
    <main className="flex-grow bg-gray-100 p-8">
      <h2 className="text-2xl mb-4">Home page</h2>
      <p>A description about the website, products, or services.</p>
    </main>
    <Footer />
  </div>
);

export default Home;
