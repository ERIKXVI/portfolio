import Header from "@/app/component/Header";
import AboutMe from "@/app/component/AboutMe";
import Projects from "@/app/component/Projects";
import Footer from "@/app/component/Footer";

const Layout = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Projects />
            <Footer />
        </div>
    );
};

export default Layout;