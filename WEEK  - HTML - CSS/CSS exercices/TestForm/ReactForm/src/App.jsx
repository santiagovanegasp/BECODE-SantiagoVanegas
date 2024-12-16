import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName:"",
    email: "",
    age: "",
    phoneNumber:"",
    password:"",
    repeatPassword:"",

  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Solo validar en vivo si la validación ya se ha hecho una vez
    if (touched) {
      validateField(name, value);
    }
  };


  // regex

  const namesRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const ageRegex = /^\d+$/;
  const phoneRegex = /^\d{9,10}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Validar un campo individual
  const validateField = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "FirstName":
        if (!namesRegex.test(value)) {
          errorMessage = "The name can not contain numbers.";
        }
        break;
      case "LastName":
        if (!namesRegex.test(value)) {
          errorMessage = "The lastname can not contain numbers.";
        }
        break;
      case "email":
        if (!emailRegex.test(value)) {
          errorMessage = "please, write a valid email.";
        }
        break;
      case "age":
        if (!ageRegex.test(value) || parseInt(value) <= 0) {
          errorMessage = "the age needs to be a positive number";
        }
        break;
      case "phoneNumber":
        if (!phoneRegex.test(value)) {
          errorMessage = "please, write a valid phone number";
        }
        break;
      case "password":
        if (!passwordRegex.test(value)) {
          errorMessage = "Your password must contain: At least 8 characters, 1 uppercase letter,1 lowercase letterm 1 number,1 special character  (e.g., @, $, !, %, *, ?, &).";
        }
        break;
      case "repeatPassword":
        if (value !== formData.password) {
          errorMessage = "The password does not match";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  // Función para validar todos los campos al hacer submit
  const validateForm = () => {
    const newErrors = {};

    if (!namesRegex.test(formData.FirstName)) {
      newErrors.FirstName = "The name can not contain numbers.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "please, write a valid email.";
    }

    if (!ageRegex.test(formData.age) || parseInt(formData.age) <= 0) {
      newErrors.age = "the age needs to be a positive number";
    }
    //
    if (!namesRegex.test(formData.LastName)) {
      newErrors.LastName = "The lastname can not contain numbers";
    }
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "please, write a valid phone number";
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Your password must contain: At least 8 characters, 1 uppercase letter,1 lowercase letterm 1 number,1 special character  (e.g., @, $, !, %, *, ?, &).";
    }
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "The password does not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched(true); // Activar validación en tiempo real después del primer submit

    if (validateForm()) {
      console.log("Formulario enviado exitosamente:", formData);
      setErrors({});
      setTouched(false);
    } else {
      console.log("Errores en el formulario:", errors);
    }
  };

  return (
    <div className="container-form">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{errors.FirstName && <p style={{ color: "red" }}>{errors.FirstName}</p>}</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          {/* {errors.FirstName && <p style={{ color: "red" }}>{errors.FirstName}</p>} */}
        </div>
        
        <div>
          <label>{errors.LastName && <p style={{ color: "red" }}>{errors.LastName}</p>}</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          {/* {errors.LastName && <p style={{ color: "red" }}>{errors.LastName}</p>} */}
        </div>

        <div>
          <label>{errors.email && <p>{errors.email}</p>}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
        </div>

        <div>
          <label>{errors.age && <p>{errors.age}</p>}</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            
          />
          {/* {errors.age && <p style={{ color: "red" }}>{errors.age}</p>} */}
        </div>

        <div>
          <label>{errors.phoneNumber && <p>{errors.phoneNumber}</p>}</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          {/* {errors.phoneNumber && <p style={{ color: "red" }}>{errors.phoneNumber}</p>} */}
        </div>

        <div>
          <label>{errors.password && <p>{errors.password}</p>}</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {/* {errors.password && <p style={{ color: "red" }}>{errors.password}</p>} */}
        </div>

        <div>
          <label>{errors.repeatPassword && <p>{errors.repeatPassword}</p>}</label>
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            placeholder="Repeat Password"
          />
          {/* {errors.repeatPassword && <p style={{ color: "red" }}>{errors.repeatPassword}</p>} */}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
