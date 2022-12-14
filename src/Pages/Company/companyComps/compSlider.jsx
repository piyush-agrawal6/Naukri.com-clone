import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./compSlider.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const CompSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <>
      <Slider className="mainSlider" {...settings}>

        <Link>
          <div>
            <b>MNCs</b>
            <div >
              <p>1.4K+ Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Fintech</b>
            <div >
              <p>117 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>FMCG $ Retail</b>
            <div >
              <p>38 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Startups</b>
            <div >
              <p>276 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Edtech</b>
            <div >
              <p>162 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Healthcare</b>
            <div>
              <p>124 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Unicorns</b>
            <div>
              <p>95 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>B2C</b>
            <div>
              <p>1K+ Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Internet</b>
            <div>
              <p>171 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Manufacturing</b>
            <div>
              <p>180 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Fortune 500</b>
            <div>
              <p>80 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Product</b>
            <div>
              <p>738 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Banking & Finance</b>
            <div>
              <p>153 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <b>Hospitality</b>
            <div>
              <p>28 Companies</p>
              <p>
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        </Link>
        
      </Slider>
    </>
  );
};

export default CompSlider;
