
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import "./Shop.css";

const categories = [
  {
    id: "facecare",
    name: "Face Care",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500&auto=format&fit=crop",
  },
  {
    id: "skincare",
    name: "Skin Care",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop",
  },
  {
    id: "haircare",
    name: "Hair Care",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&auto=format&fit=crop",
  },
];

const demoProducts = [
  {
    id: 901,
    title: "Gentle Face Cleanser",
    price: 399,
    category: "Face Care",
    thumbnail:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&auto=format&fit=crop",
    categoryId: "facecare",
  },
  {
    id: 902,
    title: "Hydrating Face Serum",
    price: 549,
    category: "Face Care",
    thumbnail:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop",
    categoryId: "facecare",
  },
  {
    id: 903,
    title: "Daily Moisturizer",
    price: 449,
    category: "Face Care",
    thumbnail:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&auto=format&fit=crop",
    categoryId: "facecare",
  },
  {
    id: 904,
    title: "Vitamin C Face Cream",
    price: 599,
    category: "Face Care",
    thumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop",
    categoryId: "facecare",
  },
  {
    id: 905,
    title: "Refreshing Face Mask",
    price: 299,
    category: "Face Care",
    thumbnail:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&auto=format&fit=crop",
    categoryId: "facecare",
  },
  {
    id: 911,
    title: "Daily Skin Moisturizer",
    price: 499,
    category: "Skin Care",
    thumbnail:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop",
    categoryId: "skincare",
  },
  {
    id: 912,
    title: "Vitamin C Serum",
    price: 649,
    category: "Skin Care",
    thumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop",
    categoryId: "skincare",
  },
  {
    id: 913,
    title: "Nourishing Night Cream",
    price: 579,
    category: "Skin Care",
    thumbnail:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&auto=format&fit=crop",
    categoryId: "skincare",
  },
  {
    id: 914,
    title: "Hydrating Skin Lotion",
    price: 349,
    category: "Skin Care",
    thumbnail:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&auto=format&fit=crop",
    categoryId: "skincare",
  },
  {
    id: 915,
    title: "Glow Face Serum",
    price: 699,
    category: "Skin Care",
    thumbnail:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400&auto=format&fit=crop",
    categoryId: "skincare",
  },
  {
    id: 921,
    title: "Nourishing Hair Shampoo",
    price: 399,
    category: "Hair Care",
    thumbnail:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&auto=format&fit=crop",
    categoryId: "haircare",
  },
  {
    id: 922,
    title: "Hair Repair Conditioner",
    price: 449,
    category: "Hair Care",
    thumbnail:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop",
    categoryId: "haircare",
  },
  {
    id: 923,
    title: "Hair Growth Serum",
    price: 599,
    category: "Hair Care",
    thumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&auto=format&fit=crop",
    categoryId: "haircare",
  },
  {
    id: 924,
    title: "Anti-Frizz Hair Mask",
    price: 499,
    category: "Hair Care",
    thumbnail:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&auto=format&fit=crop",
    categoryId: "haircare",
  },
  {
    id: 925,
    title: "Daily Hair Oil",
    price: 299,
    category: "Hair Care",
    thumbnail:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&auto=format&fit=crop",
    categoryId: "haircare",
  },
];

const apiUrls = {
  facecare: "https://dummyjson.com/products/category/beauty?limit=0",
  skincare: "https://dummyjson.com/products/category/skin-care?limit=0",
  haircare: "https://dummyjson.com/products/search?q=shampoo&limit=0",
};

function Shop() {
  const [products, setProducts] = useState(demoProducts);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [message, setMessage] = useState("");

  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      try {
        const responses = await Promise.all(
          Object.entries(apiUrls).map(async ([categoryId, url]) => {
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error("Unable to fetch products");
            }

            const data = await response.json();

            return (data.products || []).map((product) => ({
              ...product,
              categoryId,
              category:
                categories.find((category) => category.id === categoryId)
                  ?.name || "Beauty",
              priceInRupees: Math.round(product.price * 85),
            }));
          })
        );

        if (!cancelled) {
          const apiProducts = responses.flat();

          const uniqueProducts = [
            ...new Map(
              [...demoProducts, ...apiProducts].map((product) => [
                product.id,
                product,
              ])
            ).values(),
          ];

          setProducts(uniqueProducts);
        }
      } catch (error) {
        console.error("Product fetch failed:", error);

        if (!cancelled) {
          setProducts(demoProducts);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.categoryId === selectedCategory
        );

  const getPrice = (product) =>
    product.priceInRupees ?? product.price;

  const handleAddToCart = (product) => {
    const productForCart = {
      ...product,
      price: getPrice(product),
    };

    addToCart(productForCart);
    navigate("/cart");
  };

  return (
    <div className="shop-page">
      <section className="shop-heading">
        <p className="shop-subtitle">YOUR BEAUTY, YOUR GLOW</p>
        <h1>Discover Your Beauty</h1>
        <p>
          Find your everyday essentials for healthy skin and beautiful hair.
        </p>
      </section>

      <section className="shop-categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          {categories.map((category) => (
            <button
              type="button"
              className={`category-card ${
                selectedCategory === category.id ? "active" : ""
              }`}
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className={`show-all-btn ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          Show All Products
        </button>
      </section>

      <section className="shop-products">
        <div className="products-heading">
          <h2>
            {selectedCategory === "all"
              ? "Our Products"
              : categories.find(
                  (category) => category.id === selectedCategory
                )?.name}
          </h2>

          <p>{filteredProducts.length} products</p>
        </div>

        {loading && (
          <p className="shop-loading">Discovering your beauty essentials...</p>
        )}

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img
                src={
                  product.thumbnail ||
                  product.images?.[0] ||
                  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400"
                }
                alt={product.title}
                className="product-image"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src =
                    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400";
                }}
              />

              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3>{product.title}</h3>

                <p className="product-price">
                  ₹{getPrice(product).toLocaleString("en-IN")}
                </p>

                <button
                  type="button"
                  className="add-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        {!loading && filteredProducts.length === 0 && (
          <p className="no-products">No products found in this category.</p>
        )}
      </section>

      {message && <p className="shop-message">{message}</p>}
    </div>
  );
}

export default Shop;
