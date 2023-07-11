import { memo } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { types } from "../data/types";

const ProductForm = memo(
  ({ product, handleChange, submit, validated, selected }) => {
    const { name, date, price, type } = product;
    console.log("ProductForm");
    return (
      <Form noValidate onSubmit={submit} validated={validated}>
        <FormGroup className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            value={name}
            name="name"
            placeholder="name..."
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>
        <FormGroup className="mt-3">
          <Form.Label>Production date</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            value={date}
            name="date"
            placeholder="date..."
            type="date"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>
        <FormGroup className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            value={price}
            name="price"
            placeholder="price..."
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>
        <FormGroup className="mt-3">
          <Form.Label>Type</Form.Label>
          
          <Form.Select onChange={handleChange} value={type} name="type">
            {types.map((gr) => (
              <option key={gr} value={gr}>
                {gr}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>
        <Button className="mt-3" type="submit">
          {selected ? "Save" : "Add"}
        </Button>
      </Form>
    );
  }
);

ProductForm.displayName = ProductForm;

ProductForm.propTypes = {
  product: PropTypes.object,
  handleChange: PropTypes.func,
  submit: PropTypes.func,
  validated: PropTypes.bool,
  selected: PropTypes.bool,
};

export default ProductForm;
