import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <main>
        <NavBar />
        <main class="main">
            <h1>Hello World</h1>
        </main>
    </main>
)

function NavBar() {
    return (
        <nav class="navbar">
    <div class="logo">MySite</div>

    <ul class="nav-links">
      <li><a href="#">Home</a></li>

      <li class="dropdown">
        <a href="#" class="dropdown-toggle">Services</a>
        <ul class="dropdown-menu">
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Development</a></li>
          <li><a href="#">SEO</a></li>
        </ul>
      </li>

      <li class="dropdown">
        <a href="#" class="dropdown-toggle">About</a>
        <ul class="dropdown-menu">
          <li><a href="#">Team</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Mission</a></li>
        </ul>
      </li>

      <li><a href="#">Contact</a></li>
    </ul>

    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
    )
}