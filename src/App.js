import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import WorkWithOthers from "./pages/connect";
import CategoryPage from "./pages/categoryPage";
import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <div className="font-blinker flex flex-col min-h-screen overflow-x-hidden">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/connect" element={<WorkWithOthers />} />
                    <Route path="/:categoryId" element={<CategoryPage />} />
                    {/*<Route path="/not-found" element={<NotFound />} />*/}
                    <Route path="*" element={<NotFound />} />
                    {/*以下为屎山，可以在catagorypage里改*/}
                    <Route path="not-found" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;