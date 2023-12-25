import img24x7 from "../assets/24x7.png";
import imgfree from "../assets/free.png";
import imgpromoting from "../assets/promoting.png";
import imgsave from "../assets/savemoney.png";

const Features = () => {
  return (
    <div id="features" className="mb-4">
      <h2 className="text-center mb-4">Why Shop With Us?</h2>
      <div class="d-flex justify-content-evenly">
        <div>
          <img src={imgpromoting} alt="promoting people" />
          <h6 className="text-center">Empowering</h6>
        </div>
        <div>
          <img src={imgsave} alt="Save money" />
          <h6 className="text-center">Save Money</h6>
        </div>
        <div>
          <img src={imgfree} alt="Free Shipping" />
          <h6 className="text-center">Free Shipping</h6>
        </div>
        <div>
          <img src={img24x7} alt="24/7 customer  service" />
          <h6 className="text-center">24/7 Support</h6>
        </div>
      </div>
    </div>
  );
};

export default Features;
