import { assets } from '@/assets/assets'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="w-11/12 px-[12%] scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-ovo">About me</h2>
        <div>
            <div>
                <Image src={assets.user_image} alt="user-image" className="w-32 h-32 rounded-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default About
