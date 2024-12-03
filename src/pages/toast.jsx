// toast.jsx

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"; // Toastify uchun CSS importi

export const Toast = (status, message) => {
  if (status === "success") {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right,#0034ff, #6175cb)",
      },
    }).showToast();
  } else {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff2100, #ff8888)",
      },
    }).showToast();
  }
};
