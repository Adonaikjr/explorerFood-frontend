import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { ContainerOrder } from "./styled";

export function Orders() {
  const [data, setData] = useState([]);

  const getOrders = async () => {
    try {
      const response = await api.get("/order");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <ContainerOrder>
      <table>
        <tr>
          <th>Status</th>
          <th>Código</th>
          <th>Detalhes</th>
          <th>Data e hora</th>
        </tr>
        {data.Orders &&
          data.Orders.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.status}</td>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.created_at}</td>
              </tr>
            );
          })}
      </table>
    </ContainerOrder>
  );
}
