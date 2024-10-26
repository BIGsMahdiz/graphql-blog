import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
}

export default Loader;
