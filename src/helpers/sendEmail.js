import emailjs from "emailjs-com";
import Swal from "sweetalert2";
export const sendEmail = (
  nombre,
  email,
  telefono,
  direccion,
  referencia,
  history
) => {
  emailjs
    .send(
      "service_nptoez9",
      "template_01",
      { nombre, email, telefono, direccion, referencia },
      "user_nbPwIqFvVKAT6kA4MWQTq"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          title: "Pedido Realizado",
          text: "En unos instantes recibiras un correo de confirmación",
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
          customClass: {
            denyButton: "btn-swal2",
            actions: "btn-swal2",
            title: "title-swal2",
            popup: "container-swal2",
          },
        }).then((e) => {
          history.push("/");
        });
      },
      function (error) {
        console.log("FAILED...", error);
        Swal.fire({
          title: "Error al realizar pedido, pruebe mas tarde",
          text: error,
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
          customClass: {
            denyButton: "btn-swal2",
            actions: "btn-swal2",
            title: "title-swal2",
            popup: "container-swal2",
          },
        });
      }
    );
  // Swal.fire({
  //   title: "Pedido Realizado",
  //   text: "En unos instantes recibiras un correo de confirmación",
  //   icon: "success",
  //   showConfirmButton: false,
  //   // timer: 4000,
  // });
};
