import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import other components as needed
import Landing from "./pages/landing";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import WorkWithOthers from "./pages/connect";
import CategoryPage from "./pages/categoryPage";
import NotFound from './components/NotFound';

// List of valid category IDs
const validCategories = ["technology", "science", "health", "sports"];

function App() {
    return (
        <Router>
            <div className="font-blinker flex flex-col min-h-screen overflow-x-hidden">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/connect" element={<WorkWithOthers />} />

                    {/* Dynamic route only matches valid categories */}
                    <Route
                        path="/:categoryId"
                        element={<CategoryPage />}
                        render={({ match }) => (
                            validCategories.includes(match.params.categoryId)
                                ? <CategoryPage />
                                : <NotFound />
                        )}
                    />

                    {/* Catch-all route for undefined paths */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;