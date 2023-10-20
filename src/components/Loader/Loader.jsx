import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center,' }}>
      <RotatingLines
        strokeColor="red"
        strokeWidth="3"
        width="80"
        animationDuration="1.5"
      />
    </div>
  );
};

export default Loader;
