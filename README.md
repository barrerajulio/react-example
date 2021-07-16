# Example react application

- first mobile
- media queries
- framework para temas, plantillas, componentes
  - bootstrap
  - tailwind
  - @material-ui -> material design
- Usar framework styled components: https://styled-components.com/
- formik -> Construir formularios -> https://formik.org/
- Yup -> construir schemas de validacion
- react-router-dom -> El manejo de las rutas del sitio->https://reactrouter.com/web/guides/quick-start
- Objetivos
  - corto plazo: Punto de entrada a la aplicación principal
  - mediano plazo: Punto de entrada a la aplicación principal que valide la autoridad de los diferentes usuarios
  - largo plazo: Punto de entrada a la aplicación principal que valide la autoridad de los diferentes usuarios

# Get started

```bash
npx create-react-app signin --template=typescript
cd signin
yarn start
yarn add @material-ui/core
```
jsx: Javascript sugar syntax

Grids: https://material-ui.com/components/grid/
TextField: https://material-ui.com/components/text-fields/
Checkbox: https://material-ui.com/components/checkboxes/
Button: https://material-ui.com/components/buttons/

Copiar y pegar: ALT+shift+Flecha hacia abajo

REGLA: No reinventar la rueda


## Next steps:

- Reconocer valores insertados por parte del usuario
- Validar el formulario
- Reaccionar al envio del formulario
- Aplicar estilos a la plantilla


## Summary

- Maqueta estructural
- Lógica funcional
- Maqueta estilos

# Sesion 2

{
    "name": "Julio",
    "lastName: "Barrera",
    "email": "julio.barrera@yaydoo.com",
    "password": "123456789",
    "acceptTerms": true
}

yarn add yup
yarn add formik
casteo de datos


                  value={signinForm.values.name}
                  onChangeCapture={signinForm.handleChange("name")}

Generamos un "schema" de validación, donde indicamos las reglas de cada uno de los datos que solicitamos al usuario

```ts

const schemaValidate = Yup.object({
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El campo es requerido"),
  password: Yup.string().min(8).max(20).required(),
  acceptTerms: Yup.boolean().equals([true]).required(),
});
```

Ejemplos
- Si se requiere
- Si es opcional
- Si no se requiere
- Si es de tipo cadena
- Si es tipo numérico
- Si es booleano

## Generar una instancia de formik 

Usando el "hook" useFormik. Narramos las propiedades que van a servir para que formik entienda que necesita validar y que necesita almacenar, e indicar en que funcion se nos notificara cuando el formulario este completo y valido.

## Enlazamos cada uno de los campos.

TextField, checkbox de nuestro formulario con cada una de las propiedades declaradas en nuestra regla de negocio de valores a solicitar al usuario

## Capturar el valor del formulario en la función que se declaro previamente para recibir la notificación del envio del formulario


Thrutlys
falsys