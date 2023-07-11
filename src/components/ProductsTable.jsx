import { memo } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ProductsTable = memo(({ products, editProduct }) => {
  console.log("ProductsTable");
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Production date</th>
          <th>Price</th>
          <th>Type</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ name, date, price, type, id }, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>{price}</td>
            <td>{type}</td>
            <td className="text-end">
              <button
                className="btn btn-primary me-3"
                onClick={() => editProduct(id)}
              >
                <AiFillEdit/>
              </button>
              <button className="btn btn-danger"><AiFillDelete/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

ProductsTable.propTypes = {
  products: PropTypes.array,
  editProduct: PropTypes.func,
};

ProductsTable.displayName = "ProductsTable";

export default ProductsTable;
