import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";

const Product = () => {
  return (
    <div id="products">
      <h2 className="text-center">Featured Products</h2>
      <div class="row row-cols-1 row-cols-md-4 g-4 my-products">
        <div class="col my-col">
          <a href="#" className="my-anchor">
            <div class="card">
              <img src={product5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">T-Shirt</h4>
                <p class="card-text">Price: Rs. 1000.00</p>
                <button type="button" class="btn btn-success col-12 my-button">
                  Add to Bag
                </button>
              </div>
            </div>
          </a>
        </div>
        <div class="col my-col">
          <a href="#" className="my-anchor">
            <div class="card">
              <img src={product6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Jeans</h4>
                <p class="card-text">Price: Rs. 1200.00</p>
                <button type="button" class="btn btn-success col-12 my-button">
                  Add to Bag
                </button>
              </div>
            </div>
          </a>
        </div>
        <div class="col my-col">
          <a href="#" className="my-anchor">
            <div class="card">
              <img src={product7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">One Piece</h4>
                <p class="card-text">Price: Rs. 1500.00</p>
                <button type="button" class="btn btn-success col-12 my-button">
                  Add to Bag
                </button>
              </div>
            </div>
          </a>
        </div>
        <div class="col my-col">
          <a href="#" className="my-anchor">
            <div class="card">
              <img src={product8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Hoodie</h4>
                <p class="card-text">Price: Rs. 1300.00</p>
                <button type="button" class="btn btn-success col-12 my-button">
                  Add to Bag
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
