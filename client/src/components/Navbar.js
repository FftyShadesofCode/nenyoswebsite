import { menuItems } from "./ddMenuItems";
import "../CSS Files/Navbar.css";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav>
      <div className='nav'>
        <ul className='menus'>
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
