import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import BackToTop from './BackToTop';

const Footer = () => {

    const sosialStyle = "rounded-full bg-blue-700 cursor-pointer m-3 p-2 text-white"
    return (
        <>
            <div className='conatiner-xxl  mx-auto'>
                <BackToTop />
                <div className='flex items-center justify-around p-2 bg-sky-600 text-white'>
                    {/*Store information*/}
                    <div className='flex flex-col flex-1 flex-wrap p-2 px-16'>
                        <h1 className='text=[25px]'>ZainkeepsCode</h1>
                        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deleniti modi. Cum, magni. Est ducimus dolor exercitationem natus vero debitis asperiores iure saepe molestiae voluptates. Suscipit numquam dolorem sed mollitia.</p>
                        <div className='flex items-center justify-center mt-3 self-start'>
                            <div className={sosialStyle + ' bg-blue-700'}>
                                <FacebookIcon />
                            </div>
                            <div className={sosialStyle + ' bg-orange-500'}>
                                <InstagramIcon />
                            </div>
                            <div className={sosialStyle + ' bg-sky-400'}>
                                <TwitterIcon />
                            </div>
                            <div className={sosialStyle + ' bg-red-500'}>
                                <PinterestIcon />
                            </div>
                        </div>

                    </div>
                    <div className='flex-1 flex flex-col p-2'>
                        <div className='flex m-3'>
                            <LocationOnIcon />
                            <p className='pl-3 items-center'>State of California</p>
                        </div>
                        <div className='flex m-3'>
                            <LocalPhoneIcon />
                            <p className='pl-3 items-center'>+91 123456789</p>
                        </div>
                        <div className='flex m-3'>
                            <MarkunreadIcon />
                            <p className='pl-3 items-center'>zainkeepscode@gamil.com</p>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Footer
