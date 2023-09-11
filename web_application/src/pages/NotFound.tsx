import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NotFound = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Navigation />
    <main className="flex-grow bg-gray-100 p-8">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not yet exist.</p>
    </main>
    <Footer />
  </div>
);

export default NotFound;
