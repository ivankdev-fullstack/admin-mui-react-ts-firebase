import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((i) => (
        <div className="item" key={i.id}>
          <span className="title">{i.title}</span>
          {i.listItems.map((li) => (
            <Link to={li.url} className="listItem" key={li.id}>
              <img src={`/${li.icon}`} alt="home" />
              <span className="listItemTitle">{li.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
