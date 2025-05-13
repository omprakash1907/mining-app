import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* This will render the current route's component */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
