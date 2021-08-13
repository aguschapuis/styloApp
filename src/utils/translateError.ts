export const translateError = (error: string) => {
  console.log(error.toString());
  switch (error.toString()) {
    case "Error: The email address is badly formatted.":
      return "Error en el formato del email";
    case "Error: The password is invalid or the user does not have a password.":
      return "Contraseña incorrecta";
    case "Error: There is no user record corresponding to this identifier. The user may have been deleted.":
      return "Usuario invalido";
    default:
      return "Error";
  }
};
