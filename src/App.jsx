import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BeginnersTutorial from "./pages/BeginnersTutorial";
import Tuning from "./pages/Tuning";
import Practice from "./pages/Practice";
import SargamNotation from "./pages/SargamNotation";
import RaagKirtan from "./pages/RaagKirtan";
import Resources from "./pages/Resources";
import Glossary from "./pages/Glossary";
import './App.css';
import ThemeProvider from './ThemeProvider';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/beginners-tutorial" element={<BeginnersTutorial />} />
                    <Route path="/tuning" element={<Tuning />} />
                    <Route path="/practice" element={<Practice />} />
                    <Route path="/sargam-notation" element={<SargamNotation />} />
                    <Route path="/raag-kirtan" element={<RaagKirtan />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/glossary" element={<Glossary />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;