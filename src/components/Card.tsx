import { Icons } from "../theme/icons";
import "./Card.css";

type Props = {
  icon: keyof typeof Icons;
  heading: string;
  description: string;
};

const Card = ({ icon, heading, description }: Props) => {
  return (
    <div className="card">
      <img src={Icons[icon]} width={28} height={28} />
      <div className="heading">{heading}</div>
      <div className="desc-text body-small">{description}</div>
    </div>
  );
};

export default Card;
