import { ContainerSidebar } from "./styled";
import { BiSearch, IoMdClose } from "react-icons/all";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../hooks/auth";
import { Footer } from "../Footer";
import { useContext, useEffect } from "react";
import { CardSearch } from "../CardSearch";

export function Sidebar() {
  const { Query, search, setSearch } = useContext(AuthContext);

  const isAdmin = localStorage.getItem("@explorerFood:isAdmin");

  const navigate = useNavigate();
  const { signOut } = useAuth();
  function handleBack() {
    navigate(-1);
  }
  function handleExit() {
    signOut();
    navigate("/");
    window.location.reload(true);
  }
  function handleNewPlate() {
    navigate("/new");
  }

  useEffect(() => {
    setSearch("");
  }, []);
  return (
    <ContainerSidebar>
      <header>
        <div>
          <IoMdClose
            color="#FFFF"
            size={24}
            onClick={handleBack}
            cursor="pointer"
          />
          <p>Menu</p>
        </div>
      </header>
      <main>
        <label>
          search
          <Input
            icon={BiSearch}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <ul>
          <li>
            {Query &&
              Query?.map((item) => {
                if (!search) {
                  return;
                }
                return search ? (
                  <CardSearch
                    to={`/details/plates/${item.id}`}
                    key={item.id}
                    title={item.title}
                    description={item.description}
                  />
                ) : null;
              })}
          </li>
        </ul>

        <nav>
          <ul>
            {isAdmin == "1" ? (
              <li>
                <button onClick={handleNewPlate}>Novo prato</button>
              </li>
            ) : null}
            <li>
              <p onClick={handleExit}>Sair</p>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </ContainerSidebar>
  );
}
