import { Html, useProgress } from "@react-three/drei";
import { hourglass } from 'ldrs'

hourglass.register()

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75"
        color="#fff"
      ></l-hourglass>
    </Html>
  )
}

export default Loader