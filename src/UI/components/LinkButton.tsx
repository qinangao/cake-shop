import { Link } from "react-router-dom";

type LinkButtonProps = {
  linkName: string;
};

function LinkButton({ linkName }: LinkButtonProps) {
  return (
    <div>
      <Link
        to="/menu"
        className="text-blue-600 hover:underline mb-8 inline-block"
      >
        {linkName}
      </Link>
    </div>
  );
}

export default LinkButton;
