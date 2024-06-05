export interface ISlide {
    id: string;
    h1: string;
    p: string;
    Link: string;
    url: string;
}

export interface ICarouselItem {
    id: string;
  image: string;
  text: string;
}

export interface ICarouselProps {
  data: ICarouselItem[];
}

export interface ITestimonialData {
  id: string;
  position:  number;
  imageSrc: string;
  text: string;
  name: string;
  isActive: boolean;
  height?: number; // Define height prop
}

export interface ITestimonialsProps {
  testimonials: ITestimonialData[];
}