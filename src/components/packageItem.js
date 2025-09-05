function PackageItem() {
  let item_img = "http://www.picsum.photos/80/80";
  return (
    <>
      <div className="item">
        <div className="itemImg">
          <img src={item_img} alt="package imaage" />
        </div>
        <div className="itemDetails">
          <h3 className="itemName">Package Name</h3>
          <p className="itemDescription">Lorem, ipsum dolor sit amet </p>
        </div>
      </div>
    </>
  );
}

export default PackageItem;
