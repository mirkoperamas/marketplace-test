import classes from "./carousel.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useBanners } from "../../../hooks/useBanners";

export const Carousel = () => {
  const { bannersDb } = useBanners();

  return (
    <section className={classes.carousel}>
      <Swiper
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {bannersDb == "" && (
          <SwiperSlide>
            <div
              style={{ background: "#ff000050" }}
              className={classes.carousel__slide}
            ></div>
          </SwiperSlide>
        )}

        {bannersDb?.map(({ id, image }) => {
          return (
            <SwiperSlide key={id}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                }}
                className={classes.carousel__slide}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
