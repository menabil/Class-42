const Image = ({ img, className, imgAlt }) => {
  return <img className={`${className}`} src={img} alt={imgAlt} />;
};

export default Image;
