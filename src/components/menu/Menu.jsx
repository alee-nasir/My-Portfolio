import "./menu.scss";

export default function Menu({ menuOn, setMenuOn }) {
  return (
    <div className={"menu " + (menuOn && "active")}>
      <ul onClick={() => setMenuOn(false)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
