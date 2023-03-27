import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
  const Hero = () => {
  return (
      <section className={"relative h-screen w-full mx-auto"}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
      <div className='flex  justify-center items-center mt-5 flex-col'>
      <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
      <div className='w-1 sm:h-80 h-40 violet-gradient'/>
      
      </div>
      <div>
        <h3 className={`${styles.heroHeadText} text-white`}>Hi,I'am <span className='text-[#915eff]'>Arslan jaffar</span></h3>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      I develop 3D visuals,user <br className='block sm:hidden'/> interfaces and web application
        </p>
      </div>
      </div>
        <ComputersCanvas/>
      </section>
  )
}

export default Hero