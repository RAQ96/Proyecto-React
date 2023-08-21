import './OpcionMenu.css';

function OpcionMenu(props) {
  return (
    <li className="opcionMenu">
      <a href="/" className="linkMenu">
        {props.valor}
      </a>
    </li>
  );
}

export default OpcionMenu;
