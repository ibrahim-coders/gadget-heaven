import { toast } from 'react-toastify';

//  all products from localStorage
const getAllProducts = () => {
  const all = localStorage.getItem('Producat');
  const producats = all ? JSON.parse(all) : [];
  return producats;
};

// Add a product to localStorage
const handelAddProducat = producat => {
  const producats = getAllProducts();
  const status = producats.find(
    item => item.product_id === producat.product_id
  );

  if (status) {
    toast.error('Product is already added!');
    return;
  } else {
    producats.push(producat);
    localStorage.setItem('Producat', JSON.stringify(producats));
    toast.success('Product added successfully!');
  }

  // Add new product
};

// Remove
const handelRemoveProducat = productId => {
  const producats = getAllProducts();
  const updatedProducts = producats.filter(
    item => item.product_id !== productId
  );
  localStorage.setItem('Producat', JSON.stringify(updatedProducts));
  toast.success('Product removed successfully!');
};
//wishList part
const addWishListProducat = () => {
  const all = localStorage.getItem('WishList');
  return all ? JSON.parse(all) : [];
};

const handelwishList = producat => {
  const producats = addWishListProducat();
  const status = producats.find(
    item => item.product_id === producat.product_id
  );

  if (status) {
    toast.error('Product is already added!');
  } else {
    producats.push(producat);
    localStorage.setItem('WishList', JSON.stringify(producats));
    toast.success('Product added to wishlist!');
  }
};
const WishListRemoveProducat = productId => {
  const producats = addWishListProducat();
  const updatedProducts = producats.filter(
    item => item.product_id !== productId
  );
  localStorage.setItem('Producat', JSON.stringify(updatedProducts));
  toast.success('Product removed successfully!');
};

export {
  handelAddProducat,
  getAllProducts,
  handelRemoveProducat,
  handelwishList,
  addWishListProducat,
  WishListRemoveProducat,
};
