import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HomeBanner = () => {

  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  

  return (
    <div className='h-96 bgImage my-5 slider-container overflow-hidden'>
      <div className="container mx-auto h-full">
      {/* content section start */}
      <div>
      <Slider {...settings} className="h-full">
        <div className="flex justify-between items-center">
          <div className="p-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, libero deleniti amet incidunt ipsum in consectetur nobis? Hic cupiditate commodi fugiat officia voluptatum! Voluptates aliquid fuga, maxime quam iste possimus neque! Vel repudiandae illum quam? Culpa esse praesentium, magni beatae impedit nisi explicabo eveniet, reiciendis necessitatibus odit voluptate blanditiis iste voluptatum accusamus. Nisi debitis eum ipsam libero obcaecati iste excepturi sed nostrum quasi porro accusamus accusantium qui fugiat id tempore, earum assumenda explicabo nemo ullam corrupti ducimus reprehenderit. Aliquid sequi quas accusantium delectus nihil adipisci enim modi consequuntur quidem provident. Aut quibusdam corporis aperiam sit magnam illum odit explicabo dolores libero cumque, minima asperiores aspernatur voluptate ratione voluptatum doloremque vero optio praesentium soluta culpa? Repellendus debitis tempora impedit laudantium cum! Repellat tenetur rerum doloremque quas fuga culpa explicabo minus alias quaerat sit harum unde, sequi repellendus dignissimos eum perferendis atque quisquam voluptatibus cumque, qui adipisci illum blanditiis id dolorum. Voluptatem, vel labore quo optio reprehenderit dicta et eos, fugit itaque facilis sed error sapiente nemo illo libero saepe sit. Rerum aliquid magni doloremque, autem sequi accusantium quam est laborum magnam cum pariatur perferendis, labore ut eveniet libero voluptatem. Error, molestias incidunt? Ex quidem repudiandae minima neque numquam voluptatibus fugiat iusto.</p>
          </div>
        </div>
        <div>
          <div className="p-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, libero deleniti amet incidunt ipsum in consectetur nobis? Hic cupiditate commodi fugiat officia voluptatum! Voluptates aliquid fuga, maxime quam iste possimus neque! Vel repudiandae illum quam? Culpa esse praesentium, magni beatae impedit nisi explicabo eveniet, reiciendis necessitatibus odit voluptate blanditiis iste voluptatum accusamus. Nisi debitis eum ipsam libero obcaecati iste excepturi sed nostrum quasi porro accusamus accusantium qui fugiat id tempore, earum assumenda explicabo nemo ullam corrupti ducimus reprehenderit. Aliquid sequi quas accusantium delectus nihil adipisci enim modi consequuntur quidem provident. Aut quibusdam corporis aperiam sit magnam illum odit explicabo dolores libero cumque, minima asperiores aspernatur voluptate ratione voluptatum doloremque vero optio praesentium soluta culpa? Repellendus debitis tempora impedit laudantium cum! Repellat tenetur rerum doloremque quas fuga culpa explicabo minus alias quaerat sit harum unde, sequi repellendus dignissimos eum perferendis atque quisquam voluptatibus cumque, qui adipisci illum blanditiis id dolorum. Voluptatem, vel labore quo optio reprehenderit dicta et eos, fugit itaque facilis sed error sapiente nemo illo libero saepe sit. Rerum aliquid magni doloremque, autem sequi accusantium quam est laborum magnam cum pariatur perferendis, labore ut eveniet libero voluptatem. Error, molestias incidunt? Ex quidem repudiandae minima neque numquam voluptatibus fugiat iusto.</p>
          </div>
        </div>
        <div>
          <div className="p-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, libero deleniti amet incidunt ipsum in consectetur nobis? Hic cupiditate commodi fugiat officia voluptatum! Voluptates aliquid fuga, maxime quam iste possimus neque! Vel repudiandae illum quam? Culpa esse praesentium, magni beatae impedit nisi explicabo eveniet, reiciendis necessitatibus odit voluptate blanditiis iste voluptatum accusamus. Nisi debitis eum ipsam libero obcaecati iste excepturi sed nostrum quasi porro accusamus accusantium qui fugiat id tempore, earum assumenda explicabo nemo ullam corrupti ducimus reprehenderit. Aliquid sequi quas accusantium delectus nihil adipisci enim modi consequuntur quidem provident. Aut quibusdam corporis aperiam sit magnam illum odit explicabo dolores libero cumque, minima asperiores aspernatur voluptate ratione voluptatum doloremque vero optio praesentium soluta culpa? Repellendus debitis tempora impedit laudantium cum! Repellat tenetur rerum doloremque quas fuga culpa explicabo minus alias quaerat sit harum unde, sequi repellendus dignissimos eum perferendis atque quisquam voluptatibus cumque, qui adipisci illum blanditiis id dolorum. Voluptatem, vel labore quo optio reprehenderit dicta et eos, fugit itaque facilis sed error sapiente nemo illo libero saepe sit. Rerum aliquid magni doloremque, autem sequi accusantium quam est laborum magnam cum pariatur perferendis, labore ut eveniet libero voluptatem. Error, molestias incidunt? Ex quidem repudiandae minima neque numquam voluptatibus fugiat iusto.</p>
          </div>
        </div>
      </Slider>
      </div>
      {/* content section end */}
      </div>
    </div>
  );
};

export default HomeBanner;