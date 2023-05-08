import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../service/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [countOrder, setCountOrder] = useState(0);
  const [dataPlates, setDataPlates] = useState({});
  const [search, setSearch] = useState(null);
  const [Query, setQuery] = useState("");
  const [isAdmin, setIsAdmin] = useState(0);

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;
      localStorage.setItem("@explorerFood:id", user.id);
      localStorage.setItem("@explorerFood:isAdmin", user.isAdmin);
      localStorage.setItem("@explorerFood:user", JSON.stringify(user));
      localStorage.setItem("@explorerFood:token", token);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        toast("Usuario não encontrado ⚠️", { theme: "dark" });
      } else {
        toast("nao foi possivel entrar");
      }
    }
  }

  const VerifyIsAdmin = async () => {
    try {
      const userId = localStorage.getItem("@explorerFood:id");
      const response = await api.get(`/session/${userId}`);
      setIsAdmin(response.data.isAdmin);
    } catch (error) {
      console.log(error);
    }
  };

  function signOut() {
    localStorage.removeItem("@explorerFood:id");
    localStorage.removeItem("@explorerFood:token");
    localStorage.removeItem("@explorerFood:user");
    localStorage.removeItem("@explorerFood:isAdmin");
    window.location.reload(true);

    setData({});
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user);
      localStorage.setItem("@explorerFood:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado");
    } catch (error) {
      if (error.response) {
        toast("algo deu errado tente mais tarde");
      } else {
        toast("nao foi possivel atualizar perfil");
      }
    }
  }

  const getPlate = async () => {
    const admin = "1";
    try {
      const res = await api.get(`plate/admin/${admin}`);
      setDataPlates(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearch = async () => {
    try {
      const res = await api.get(
        `plate/?user_id=1&title=${search}`
      );
      setQuery(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    VerifyIsAdmin();
  }, [isAdmin]);

  useEffect(() => {
    getSearch();
  }, [search]);

  useEffect(() => {
    const token = localStorage.getItem("@explorerFood:token");
    const user = localStorage.getItem("@explorerFood:user");

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setData({
        token,
        user,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
        countOrder,
        setCountOrder,
        dataPlates,
        Query,
        search,
        setSearch,
        isAdmin,
        VerifyIsAdmin,
        getPlate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
