import { useContext, useEffect, useRef, useState } from "react";
import { api } from "../../service/api";
import { ContainerOrder } from "./styled";
import { TiArrowBack, MdDelete, MdDeleteOutline } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import { InputOrder } from "../../components/InputOrder";
import { Input } from "../../components/Input";
import { AuthContext, useAuth } from "../../hooks/auth";

export function Orders() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [deleteOrderId, setDeleteOrderId] = useState(null);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  //usuario: preciso fazer um filtro para mostrar somente os pratos de um UNICO user_id que NÃO seje admin
  //admin: preciso listar todos os pedidos para o administrador do restaurante
  //adicionar ao header a quantidades de pedido do usuario

  const userId = localStorage.getItem("@explorerFood:id");

  const newDataOrderUserId = data.Orders?.filter((item) => {
    if (item.user_id == userId) {
      return item;
    }
  }).filter(Boolean);

  const getOrders = async () => {
    try {
      const response = await api.get("/order");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const PathOrder = async (e) => {
    try {
      await api.patch(`order/${orderId}`, {
        status,
      });
    } catch (error) {
      console.log("opps algo deu errado", error);
    }
  };

  function handleBack() {
    navigate(-1);
  }
  if (deleteOrderId) {
    handleDelete();
  }
  //11 961975937
  //Rua bartolomeo sp casa verde
  async function handleDelete() {
    const YesDeleteNote = window.confirm("Deseja excluir este pedido?");
    if (YesDeleteNote) {
      try {
        await api.delete(`order/${deleteOrderId}`);
        setDeleteOrderId(null);
      } catch (error) {
        console.log("ooops algo deu errado", error);
      }
    }
  }

  useEffect(() => {
    PathOrder();
    setStatus('')
  }, [status]);

  useEffect(() => {
    getOrders();
  }, [deleteOrderId]);

  return (
    <ContainerOrder>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          paddingTop: 35,
        }}
        onClick={handleBack}
      >
        <TiArrowBack size={50} color="FFF" />
      </button>
      <datalist id="statusList">
        <option value="Preparando" >Preparando</option>
        <option value="Entregue">Entregue</option>
      </datalist>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhes</th>
            <th>Data e hora</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {isAdmin == 1
            ? data.Orders &&
              data.Orders?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      {isAdmin == 1 ? (
                        <Input
                          list="statusList"
                          key={item.id}
                          placeholder={item.status}
                          onChange={(e) => setStatus(e.target.value)}
                          onClick={() => setOrderId(item.id)}
                        />
                      ) : (
                        <Input
                          key={item.id}
                          disabled
                          placeholder={item.status}
                        />
                      )}
                      <datalist id="statusList">
                        <option value="Preparando" />
                        <option value="Entregue" />
                      </datalist>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td>{item.created_at}</td>
                    <td>
                      <MdDeleteOutline
                        color="red"
                        size={24}
                        cursor="pointer"
                        onClick={() => setDeleteOrderId(item.id)}
                      />
                    </td>
                  </tr>
                );
              })
            : newDataOrderUserId &&
              newDataOrderUserId?.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      {isAdmin == 1 ? (
                        <Input
                          list="statusList"
                          key={item.id}
                          placeholder={item.status}
                          onChange={(e) => setStatus(e.target.value)}
                          onClick={() => setOrderId(item.id)}
                        />
                      ) : (
                        <Input
                          key={item.id}
                          disabled
                          placeholder={item.status}
                        />
                      )}
                      <datalist id="statusList">
                        <option value="Preparando" />
                        <option value="Entregue" />
                      </datalist>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.description}</td>
                    <td>{item.created_at}</td>
                    <td>
                      <MdDeleteOutline
                        color="red"
                        size={24}
                        cursor="pointer"
                        onClick={() => setDeleteOrderId(item.id)}
                      />
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </ContainerOrder>
  );
}
