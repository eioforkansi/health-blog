import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src=" https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>Emeka</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iusto distinctio nisi ipsum debitis molestias asperiores quas, vel,
            a veniam sint, commodi nam possimus dicta architecto fugit explicabo
            quidem placeat.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iusto distinctio nisi ipsum debitis molestias asperiores quas, vel,
            a veniam sint, commodi nam possimus dicta architecto fugit explicabo
            quidem placeat.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facilis iusto distinctio nisi ipsum debitis molestias
            asperiores quas, vel, a veniam sint, commodi nam possimus dicta
            architecto fugit explicabo quidem placeat.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iusto distinctio nisi ipsum debitis molestias asperiores quas, vel,
            a veniam sint, commodi nam possimus dicta architecto fugit explicabo
            quidem placeat.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Facilis iusto distinctio nisi ipsum debitis molestias
            asperiores quas, vel, a veniam sint, commodi nam possimus dicta
            architecto fugit explicabo quidem placeat.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis iusto distinctio nisi ipsum
            debitis molestias asperiores quas, vel, a veniam sint, commodi nam
            possimus dicta architecto fugit explicabo quidem placeat.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};
