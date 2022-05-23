import { RingLoader } from "react-spinners";

const WindowLoader = ({ isLoading }) => {
  return (
    <div
      className="flex content_center item_center"
      style={{
        width: "100%",
        height: "100vh",
        background: "#071a2f",
      }}
    >
      <RingLoader color={"#ffc300"} isLoading={isLoading} size={110} />
    </div>
  );
};

export default WindowLoader;
