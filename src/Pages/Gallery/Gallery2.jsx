import image1 from './Images/23.webp'
import image2 from './Images/24.webp'
import image3 from './Images/25.webp'
import image4 from './Images/26.webp'
import image5 from './Images/27.webp'
import image6 from './Images/28.webp'
import image7 from './Images/29.webp'
import image8 from './Images/30.webp'
import image9 from './Images/31.webp'
import image10 from './Images/32.webp'
import image11 from './Images/33.webp'
import image12 from './Images/34.webp'


function Gallery2() {
  return (
    <div className="p-10 pt-0 w-full bg-fourthColor">
      <div className='flex justify-center item-center text-4xl font-bold py-12'>CESA Fiesta 2.0</div>
      <div className="grid grid-cols-1 justify-items-center gap-x-0 gap-y-16 space-between md:grid-cols-2 lg:grid-cols-3">
        <img className="w-auto max-w-96 object-cover object-center " src={image2} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image1} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image3} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image4} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image5} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image6} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image7} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image8} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image9} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image10} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image11} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image12} alt="" />
        <img className="w-auto max-w-96 object-cover object-center " src={image12} alt="" />
      </div>
    </div>
  )
}

export default Gallery2