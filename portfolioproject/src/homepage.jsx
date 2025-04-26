import { createRoot } from 'react-dom/client';
import Navbar from './assets/Components/navbar';
import ProjectBox from './assets/Components/projectbox';
createRoot(document.getElementById('root')).render(
    <main>
        <Navbar />
        
        <main className="main">
            <h1>Welcome to My Portfolio</h1>

            <ProjectBox />
        </main>
       
    </main>
)

