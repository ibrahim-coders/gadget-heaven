import { toast } from 'react-toastify';

// get all producat from localStorage
const getAllProducts = () => {
  const all = localStorage.getItem('Producat');
  const producats = all ? JSON.parse(all) : [];
  console.log(producats);
  return producats;
};
// add to producat locatstoreg
const handelAddProducat = producat => {
  const producats = getAllProducts();
  const status = producats.find(
    item => item.product_id === producats.product_id
  );
  if (status) {
    toast.error('Product is already added!');
    return;
  }

  console.log(producats);
  producats.push(producat);
  localStorage.setItem('Producat', JSON.stringify(producats));
  // toast.success('Successfully Creacted');
};

//remove localStoreg

export { handelAddProducat, getAllProducts };
