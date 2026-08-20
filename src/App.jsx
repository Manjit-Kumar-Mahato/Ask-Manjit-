import { Navbar } from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { DeveloperJourney } from "@/sections/DeveloperJourney";
import { CodingProfile } from "@/sections/CodingProfile";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import AllProjects from "@/sections/AllProjects";


function HomePage() {
    return (
        <div className="min-h-screen overflow-x-hidden">

            <Navbar />

            <main>

                <Hero />

                <About />

                <Projects />

                <CodingProfile />

                <DeveloperJourney />

                <Contact />

            </main>

            <Footer />

        </div>
    );
}


function App() {

    const path = window.location.pathname;


    if (path === "/projects") {
        return <AllProjects />;
    }


    return <HomePage />;
}


export default App;