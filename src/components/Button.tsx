import "./Button.css";

type Props = {
  text: string;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant = "primary", text, ...props }: Props) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
