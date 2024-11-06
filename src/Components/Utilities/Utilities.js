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
  }

  // Add new product
  producats.push(producat);
  localStorage.setItem('Producat', JSON.stringify(producats));
  toast.success('Product added successfully!');
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

export { handelAddProducat, getAllProducts, handelRemoveProducat };
