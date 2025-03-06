import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';
import About from './page/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/course" element={<Course />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/inspireedge" element={<InspireEdge />} />
      <Route path="/book" element={<Book />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Blog />} />
       ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE 
      <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
