import img1 from '../../../../public/sportsImg/archery.png';
import img2 from '../../../../public/sportsImg/badminton.png';
import img3 from '../../../../public/sportsImg/baseball.png';
import img4 from '../../../../public/sportsImg/basketball.png';
import img5 from '../../../../public/sportsImg/cricket.png';
import img6 from '../../../../public/sportsImg/cycling.png';
import img7 from '../../../../public/sportsImg/football.png';
import img8 from '../../../../public/sportsImg/golf.png';
import img9 from '../../../../public/sportsImg/hockey.png';
import img10 from '../../../../public/sportsImg/skateboard.png';
import img11 from '../../../../public/sportsImg/swimming.png';
import img12 from '../../../../public/sportsImg/tabletennis.png';
import img13 from '../../../../public/sportsImg/tennis.png';
import img14 from '../../../../public/sportsImg/volleyball.png';

const SportsGallery = () => {
  return (
    <div>
      {/* content section start */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7">
        {/* item1 start */}
        <div className='overflow-hidden'>
          <img src={img1} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item1 end */}
        {/* item2 start */}
        <div className='overflow-hidden'>
          <img src={img2} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item2 end */}
        {/* item3 start */}
        <div className='overflow-hidden'>
          <img src={img3} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item3 end */}
        {/* item4 start */}
        <div className='overflow-hidden'>
          <img src={img4} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item4 end */}
        {/* item5 start */}
        <div className='overflow-hidden'>
          <img src={img5} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item5 end */}
        {/* item6 start */}
        <div className='overflow-hidden'>
          <img src={img6} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item6 end */}
        {/* item7 start */}
        <div className='overflow-hidden'>
          <img src={img7} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item7 end */}
        {/* item8 start */}
        <div className='overflow-hidden'>
          <img src={img8} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item8 end */}
        {/* item9 start */}
        <div className='overflow-hidden'>
          <img src={img9} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item9 end */}
        {/* item10 start */}
        <div className='overflow-hidden'>
          <img src={img10} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item10 end */}
        {/* item11 start */}
        <div className='overflow-hidden'>
          <img src={img11} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item11 end */}
        {/* item12 start */}
        <div className='overflow-hidden'>
          <img src={img12} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item12 end */}
        {/* item13 start */}
        <div className='overflow-hidden hidden lg:block'>
          <img src={img13} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in'></img>
        </div>
        {/* item13 end */}
        {/* item14 start */}
        <div className='overflow-hidden hidden lg:block'>
          <img src={img14} className='w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-44 hover:scale-105 hover:duration-500 hover:ease-in z-10'></img>
        </div>
        {/* item14 end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default SportsGallery;