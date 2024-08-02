import "../styles/009 cart-item.styles.scss";
export const Cartitem = ({ item }) => {
  return (
    <div className="cart-item-container">
      <div>
        <img src={item.imageUrl} alt="sss" />
      </div>
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>
          {item.qnty}x <span> ${item.price}</span>
        </p>
      </div>
    </div>
  );
};
