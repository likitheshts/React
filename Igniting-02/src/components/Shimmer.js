import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div data-testid="shimmer">
      <ShimmerSimpleGallery card imageHeight={200} row={5} col={4} caption />
    </div>
  );
};
export default Shimmer;
// width: 160px;
// border: 1px solid black;
// padding: 10px;
// margin: 10px;
