import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountBox } from "react-icons/md";
import "./Nav.css";
const Nav = ({ Contract }: { Contract: () => void }) => {
  
  return (
    <>

        {" "}
        <button className="btn btn-secondary" onClick={Contract}>
          <GiHamburgerMenu />
        </button>{" "}
        <MdAccountBox size="37" />
    </>
  );
};

export default Nav;
