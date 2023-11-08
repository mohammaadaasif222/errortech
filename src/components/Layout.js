import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header class="header">
        <a class="brand-logo" href="/">
          <div class="logo">
            <div class="dots">
              <div class="first-dot">■</div>
              <div>■</div>
              <div>■</div>
              <div>■</div>
            </div>
          </div>
          <div class="brand-name">
            <p>shophub</p>
          </div>
        </a>
        <nav>
          <button id="sidebar" class="hamburger-icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="svg-inline--fa fa-bars fa-w-14 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div id="overlay"></div>
          <div class="nav-links">
            <button class="sidebarCloseButton">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                class="svg-inline--fa fa-times fa-w-11 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
            <a class="nav-link active" href="/" aria-current="page">
              Home
            </a>
            <a class="nav-link" href="/shop">
              Shop
            </a>
            <a class="nav-link" href="/blog">
              Blog
            </a>
            <a class="nav-link" href="/contact">
              Contact
            </a>
            <a class="nav-link" href="/login">
              Login
            </a>
            <a class="nav-link" href="/signup">
              SignUp
            </a>
            <a class="nav-link" href="/myaccount">
              My Account
            </a>
          </div>
        </nav>
        <div class="cart">
          <div class="cart-icon">
            <a class="cart-button" href="/cart">
              <span aria-label="shopping cart" role="img">
                {" "}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shopping-bag"
                  class="svg-inline--fa fa-shopping-bag fa-w-14 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </header>
      <div className="products-hero-design">
        <div className="ripple-design">
          <div className="ripple-circle very-small shade0"></div>
          <div className="ripple-circle small shade1"></div>
          <div className="ripple-circle medium shade2"></div>
          <div className="ripple-circle large shade3"></div>
        </div>
        <div className="products-nav">
          <p className="breadCrump">
            <span className="home-link">Home</span> / Shop
          </p>
          <h3 className="title">Shop</h3>
          <div className="result-sorting">
            <p>Showing 1-12 of 36 results</p>
            <select id="sortigOrder" name="sortigOrder">
              <option value="defaultSorting">Default sorting</option>
              <option value="newest">Latest</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <Outlet />
      <hr/>
      <div className="container py-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="weight-700"><b>&copy; 2023 . All Rights Reserved | Developed by Mohammad </b></p>
        </div>
      </div>
      </div>
    
    </>
  );
};

export default Layout;
