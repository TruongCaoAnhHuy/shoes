import Header from "~/layouts/component/Header";
import Footer from "~/layouts/component/Footer";

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;