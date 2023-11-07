import PropTypes from "prop-types";

const Card = ({ product, actionText, action }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-full h-48 object-cover object-center"
        alt="photo"
        src={product.images[0]}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ₺{product.price}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline disabled:!bg-gray-500"
          onClick={action}
        >
          {actionText}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};
export default Card;
