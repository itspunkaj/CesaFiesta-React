import image1 from './drive-download-20240112T100259Z-001/1.jpg'
import image2 from './drive-download-20240112T100259Z-001/2.jpg'
import image3 from './drive-download-20240112T100259Z-001/3.jpg'
import image4 from './drive-download-20240112T100259Z-001/4.jpg'
import image5 from './drive-download-20240112T100259Z-001/5.jpg'
import image6 from './drive-download-20240112T100259Z-001/6.jpg'
import image7 from './drive-download-20240112T100259Z-001/7.jpg'

function Gallery() {
  return (
    <div className="p-10 pt-0 w-full">
    <div className='flex justify-center item-center text-3xl font-bold py-12'>Gallery</div>
    <div className="grid grid-cols-1 gap-8 space-between md:grid-cols-2 lg:grid-cols-3">
        {/* <div className="h-[30vh]"> */}
            <img className="w-auto object-cover object-center " src={image2} alt=""/>
            <img className="w-auto object-cover object-center " src={image1} alt=""/>
            <img className="w-auto object-cover object-center " src={image3} alt=""/>
            <img className="w-auto object-cover object-center " src={image4} alt=""/>
            <img className="w-auto object-cover object-center " src={image5} alt=""/>
            <img className="w-auto object-cover object-center " src={image6} alt=""/>
            <img className="w-auto object-cover object-center " src={image7} alt=""/>
        {/* </div> */}
    </div>
</div>
  )
}

export default Gallery