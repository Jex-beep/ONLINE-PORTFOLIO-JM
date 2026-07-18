import { Route, Routes } from 'react-router'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ResumePage } from './pages/ResumePage'
import { PlaceholderPage } from './pages/PlaceholderPage'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route
            path="/contact"
            element={
              <PlaceholderPage
                index="05"
                title="Contact"
                description="A proper contact form is coming. Until then, the footer links work great."
              />
            }
          />
          <Route
            path="*"
            element={
              <PlaceholderPage
                index="404"
                eyebrow="Not Found"
                title="Lost in the void"
                description="This page doesn't exist — but plenty of good ones do."
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
