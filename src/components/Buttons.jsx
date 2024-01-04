

function Buttons({
  backgroundColor,
  color,
  borderRadius,
  text,
  border,
  icon,
  image,
}) {
  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: backgroundColor,
          textColor: color,
          border: border,
          borderRadius: borderRadius,
        }}
      >
        {text}
        {icon && icon}
        {image && <img src={image} alt="image btn" />}
      </button>
    </>
  );
}

export default Buttons;
