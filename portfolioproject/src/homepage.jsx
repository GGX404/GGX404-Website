import { createRoot } from 'react-dom/client';
import Navbar from './assets/navbar';
createRoot(document.getElementById('root')).render(
    <main>
        <Navbar />
        <main class="main">
            <h1>Hello World</h1>
        </main>
    </main>
)
