import { Form } from "./pages/Form.page";
import { Omedetou } from "./pages/Omedetou.page";

function App() {
  const url = new URL(window.location.href);
  const searchParam = new URLSearchParams(url.searchParams);
  const name = searchParam.get("name");

  return <>{name ? <Omedetou name={name} /> : <Form />}</>;
}

export default App;
