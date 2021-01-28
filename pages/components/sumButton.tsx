import { Button } from "../../styles/pages/CountButton";

export default function CountButton({ action, number }) {
  return (
    <div>
      <Button onClick={action}>Somar {number}</Button>
    </div>
  );
}
