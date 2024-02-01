import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="main-div">
      <div className="left-section">
        <h2>Yoga for Mind</h2>
        <div id="imageContainer">
          <img
            className="up-img"
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F615316329%2F1812914394463%2F1%2Foriginal.20231007-072214?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C92%2C800%2C400&s=eb01d3b4211cbda1cb56560c87015e58"
          ></img>
        </div>
        <div>
          <h2>What is Yoga for Mind?</h2>
          <p>
            The Yoga for Mind Sessions involve minimal physical movement and
            relies on techniques such as Pranayama and Meditation. Suited for
            women who cannot perform more physical forms of yoga and are looking
            for relief from concerns such as stress, anxiety, low mood etc.
          </p>
        </div>
      </div>

      {/* div for choose package */}
      <div className="right-section">
        <h2>Choose your package</h2>
        <div className="one-row">
          <div className="right-left">
            <h2> 6 Months</h2>
            <del className="old-price">&#8377;12999</del>
            <span className="new-price">&#8377;5499</span>
          </div>
          <div className="right-right">
            <span>916/month</span>
            <br />
            <button>Buy Now</button>
          </div>
        </div>

        <div className="one-row">
          <div className="right-left">
            <h2> 3 Months</h2>
            <del className="old-price">&#8377;12999</del>
            <span className="new-price">&#8377;5499</span>
          </div>
          <div className="right-right">
            <span>916/month</span>
            <br />
            <button>Buy Now</button>
          </div>
        </div>

        <div className="one-row">
          <div className="right-left">
            <h2> 1 Months</h2>
            <del className="old-price">&#8377;12999</del>
            <span className="new-price">&#8377;5499</span>
          </div>
          <div className="right-right">
            <span>916/month</span>
            <br />
            <button>Buy Now</button>
          </div>
        </div>

        <h2>What you'll get</h2>
        <p> <span>&#xf075;</span> A chat group on the elda app where you can connect with your trainer and rest of the Elda yoga community </p>
        <p><span></span></p>
      </div>
    </div>
  );
}

export default Product;
