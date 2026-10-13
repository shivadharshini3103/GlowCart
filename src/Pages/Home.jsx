import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const products = [
  {
    id: 1,
    name: 'Gentle Face Cleanser',
    category: 'FACE CARE',
    price: 299,
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Vitamin C Serum',
    category: 'SERUM',
    price: 449,
    image:
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Daily Moisturizer',
    category: 'MOISTURIZER',
    price: 349,
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Daily Sunscreen',
    category: 'SUN CARE',
    price: 399,
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Hydrating Serum',
    category: 'HYDRATION',
    price: 499,
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Nourishing Lip Balm',
    category: 'LIP CARE',
    price: 199,
    image:
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tagline">
            YOUR BEAUTY, YOUR GLOW
          </p>

          <h1>
            Glow Naturally.
            <br />
            Feel Beautiful.
          </h1>

          <p className="hero-description">
            Discover skincare essentials that make
            your everyday routine special.
            Find the perfect products for your skin.
          </p>

          <Link to="/shop" className="shop-button">
            Explore Products →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
            alt="Skincare collection"
          />
        </div>
      </section>

      <section className="bestsellers">
        <p className="section-tag">OUR FAVOURITES</p>

        <h2>Our Bestsellers</h2>

        <p className="section-description">
          Discover the skincare essentials everyone loves.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="bestseller-badge">
                  Bestseller
                </span>
              </div>

              <div className="product-info">
                <p className="product-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <p className="product-price">
                  ₹{product.price}
                </p>

                <button
                  className="add-cart-button"
                  onClick={() =>
                    alert('Login and cart functionality coming soon!')
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link to="/shop" className="view-all-button">
          View All Products →
        </Link>
      </section>

    </div>
  );
}
