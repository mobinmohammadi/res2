import React from "react";
// import Swal from "sweetalert2";

import Swal from "sweetalert2";

// استفاده صحیح:

let swalBoxCustom = (title , text , icon , confirmButtonText) => {

  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
  });
}

export { swalBoxCustom };

// : "success",
