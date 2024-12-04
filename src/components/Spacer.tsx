import "./Spacer.css";

type Props = { height: number } & React.HTMLAttributes<HTMLDivElement>;

const Spacer = ({ height, ...props }: Props) => {
  return (
    <div className="spacer" style={{ ...props.style, height }} {...props}></div>
  );
};

export default Spacer;
