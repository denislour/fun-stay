import "./featured.css";

const featured = () => {
  return (
    <div className="featured">
      <div className="futuredItem">
        <img
          src="https://via.placeholder.com/300/09f/fff.png"
          className="featuredImage"
        />
        <div className="featureedTitles">
          <h1>Product Name</h1>
          <h2>Sub title name</h2>
        </div>
      </div>
      <div className="futuredItem">
        <img
          src="https://via.placeholder.com/300/09f/fff.png"
          className="featuredImage"
        />
        <div className="featureedTitles">
          <h1>Product Name</h1>
          <h2>Sub title name</h2>
        </div>
      </div>
      <div className="futuredItem">
        <img
          src="https://via.placeholder.com/300/09f/fff.png"
          className="featuredImage"
        />
        <div className="featureedTitles">
          <h1>Product Name</h1>
          <h2>Sub title name</h2>
        </div>
      </div>
    </div>
  );
};

export default featured;
