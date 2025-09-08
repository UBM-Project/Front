import Footer from "../../shared/ui/Footer";
import Header from "../../shared/ui/Header";
import AboutSection from "./ui/AboutSection";
import CalledSection from "./ui/CalledSection";
import ForCompaniesandColleges from "./ui/ForCompaniesandColleges";
import HeroSection from "./ui/HeroSection";

export default function LandingPage() {
    return (
        <>
            <Header title={"Plataforma UBM"} navItems={[{ label: "Como Funciona?", to: "#HowToWork" }, { label: "Para Empresas", to: "#ForCompanies" }, { label: "Histórias", to: "#Stories" }]} />
            <div id="HeroSection">
                <HeroSection />
            </div>
            <div id="HowToWork">
                <AboutSection />
            </div>
            <div id="ForCompanies">
                <ForCompaniesandColleges />
            </div>
            <div id="Stories">
                <CalledSection />
            </div>
            <Footer />
        </>
    );
}