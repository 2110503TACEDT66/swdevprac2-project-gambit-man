import { Html } from '@react-three/drei';
import { LinearProgress } from '@mui/material';
const Loader = () => {
  return (
    <Html>
      <p>
        Loading...
        <LinearProgress />
      </p>
    </Html>
  );
};

export default Loader;
