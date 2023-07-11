import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductForm from "../components/ProductForm";
import Header from "../components/Header";
import ProductsTable from "../components/ProductsTable";
import { useProduct } from "../hooks/useProduct";


const DashboardP = () => {
  const {
    validated,
    product,
    results,
    search,
    averagePrice,
    selected,
    handleSearch,
    handleChange,
    submit,
    editProduct,
  } = useProduct();

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={4}>
            <ProductForm
              product={product}
              handleChange={handleChange}
              submit={submit}
              validated={validated}
              selected={selected}
            />
          </Col>
          <Col lg={8}>
            <Header
              averagePrice={averagePrice}
              search={search}
              handleSearch={handleSearch}
            />
            <ProductsTable
              search={search}
              products={results}
              editProduct={editProduct}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DashboardP;
