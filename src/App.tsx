import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg_principal">
      <Header />
      <div className="flex-1">
        <PhotoGrid />
      </div>
      <Footer />
    </div>
  );
};

export default App;
