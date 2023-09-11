import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Documentation = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Navigation />
    <main className="flex-grow bg-gray-100 p-8">
      <h2 className="text-2xl mb-4">Documentation Page</h2>
      <p>Here you will find more detailed information about how the product works.</p>
    </main>
    <Footer />
  </div>
);


export default Documentation;
