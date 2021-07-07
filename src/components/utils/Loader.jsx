import loaderImg from '../../assets/img/loader.svg';

function Loader() {
  return (
    <img
      src={loaderImg}
      alt="loader"
      style={{
        margin: '1rem auto',
        display: 'block',
        width: '8.7rem',
        height: '8.7rem',
      }}
    />
  );
}

export default Loader;
