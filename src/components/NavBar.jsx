import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { formatNumber } from "../utils/format";

const MiNavbar = () => {
  // Simulación de variables
  const total = 25000;
  const token = false; // Cambia a 'true' para probar el otro estado

  // Función para formatear el dinero
  const formatNumber = (num) => {
    return num.toLocaleString('es-CL');
  };

  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container fluid>
        <Navbar.Brand>Pizzería Mamma Mia!</Navbar.Brand>
        
        <Nav className="me-auto">
          <Button variant="outline-light" className="me-2">🏠 Home</Button>

          {/* Condicional ternario para los botones */}
          {token ? (
            <>
              <Button variant="outline-light" className="me-2">🔓 Profile</Button>
              <Button variant="outline-light">🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline-light" className="me-2">🔐 Login</Button>
              <Button variant="outline-light">🔐 Register</Button>
            </>
          )}
        </Nav>

        {/* Botón Total siempre visible */}
        <Button variant="outline-info">🛒 Total: ${formatNumber(total)}</Button>
      </Container>
    </Navbar>
  );
};

export default MiNavbar;