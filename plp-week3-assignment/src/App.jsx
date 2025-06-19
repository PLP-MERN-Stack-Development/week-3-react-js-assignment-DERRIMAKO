import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import Posts from './components/Posts'; //

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-10">
        <TaskManager />

        {/* API Data Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <Posts />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

