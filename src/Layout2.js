import "./App.css";
import Button from "./Components/Button";

export default function Layout2() {
  return (
    <div className="grid-container">
      <div
        className="grid-item"
        style={{ gridColumn: "1/3" }}
        item
        lg={4}
        xs={4}
      >
        <h3> Overview</h3>
      </div>
      <div className="grid-item2" item lg={4} xs={4}>
        <Button />
      </div>
    </div>
  );
}
