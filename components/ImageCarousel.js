import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/ImageCarousel.module.css";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = (props) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
    >
      {props.projectSecImageSlider.map((data, index) => {
        return (
          <Link href={`${data.imgSliderLink}`} target="_blank">
            <div key={index} className={`${styles.imageCarouselSlide}`}>
              <Image
                src={data.imgSlider}
                width={1584}
                height={396}
                alt="Slider Images"
              />
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
