import {useState,useEffect,Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,useGLTF,Preload } from '@react-three/drei'
import ConvasLoader from '../Loader'
const Computers = () => {
  const computer=useGLTF('./desktop_pc/scene.gltf')
  return (
    <mash>
      <hemisphereLight intensity={0.15} groundColor={"black"}/>
      <pointLight intensity={1}/>
      <primitive object={computer.scene}/>
    </mash>
  )
}

const ComputerCanvas=()=>{
  return(
    <Canvas
    frameloop='demand'
    shadows
      camera={{position:[20,3,5],fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
   <Suspense fallback={<ConvasLoader/>}>

   <OrbitControls enableZoom={false}
   maxPolarAngle={Math.PI / 2}
   minPolarAngle={Math.PI / 2}
   />
   <Computers/>
   </Suspense>
   <Preload all/>
    </Canvas>
  )
}

export default Computers