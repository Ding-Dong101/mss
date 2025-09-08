function PackageItem() {
  let item_img = "http://www.picsum.photos/80/80";
  return (
    <>
      <div className="item">
        <div>
          <img src={item_img} alt="package" className="itemImg" />
        </div>
        <div className="itemDetails">
          <h3 className="itemName">Package</h3>
          <p className="itemDescription">Lorem, ipsum dolor </p>
        </div>
      </div>
    </>
  );
}

export default PackageItem;
