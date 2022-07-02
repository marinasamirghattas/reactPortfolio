import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";
const Contact = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const skillsOptions = [
    { value: "html", label: "html" },
    { value: "css", label: "css" },
    { value: "js", label: "javaScript" },
    { value: "react", label: "react" },
    { value: "angular", label: "angular" },
    { value: "node", label: "node.js" },
    { value: "sql", label: "sql" },
    { value: "flutter", label: "flutter" },
  ];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };
  console.log(errors, "watch");
  return (
    <Form
      className=" border p-5 my-5 w-50 mx-auto row g-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className="text-danger">Name field is required</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="text-danger">Email field is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span className="text-danger">
            Email field Minimum eight characters at least one letter one number
            and one special character
          </span>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <span className="text-danger">password field is required</span>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <span className="text-danger">
            password field Minimum eight characters at least one letter one
            number and one special character
          </span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          placeholder="confirm Password"
          {...register("confirm_password", {
            required: true,
            validate: (val) => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
          })}
        />
        {errors.confirm_password &&
          errors.confirm_password.type === "validate" && (
            <span className="text-danger">passwords dont match</span>
          )}
      </Form.Group>

      <div className="">
        <Controller
          name="gender"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Select {...field} options={genderOptions} />}
        />
      </div>

      <div className="">
        <Controller
          name="skills"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select {...field} options={skillsOptions} isMulti />
          )}
        />
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
