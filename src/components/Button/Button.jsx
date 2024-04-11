import "./Button.css";

const Button = ({ onClick, text }) => {
  return <button className="myBtn" onClick={onClick}>{text}</button>;
};

export default Button;
