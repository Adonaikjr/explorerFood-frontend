import { Button } from "../../components/Button";
import { IoAdd, IoRemove } from "react-icons/all";
import {
  ContainerDetails,
  ContentDetails,
  ContainerAddCar,
  ContainerIngredients,
  ContainerContent,
  ContainerBack,
  ContainerImagePlate,
} from "./styled";
import Icons from "../../assets/icon1.svg";
import { TiArrowBack, IoIosArrowBack } from "react-icons/all";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../service/api";

export function Details() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [plate, setPlate] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [value, setValue] = useState(0);
  const [admin, setAdmin] = useState();
  const { id } = useParams();

  const baseUrl = "https://api-food-sufa.onrender.com";
  const users = 1;
  const userId = localStorage.getItem("@explorerFood:id");
  function handleBack() {
    navigate("/");
  }

  async function getPlate() {
    try {
      const res = await api.get(`plate/admin/${users}`);
      setData(res.data.plates);

      const resIngredient = await api.get(`ingredient/${users}`);
      setIngredient(resIngredient);
    } catch (error) {
      console.log(error);
    }
  }

  const filterPlate = data.filter((item) => {
    if (item.id == id) {
      return item;
    }
  });

  const newIngredientId = ingredient.data
    ?.map((ingredientId) => {
      if (ingredientId.plate_id === filterPlate[0].id) {
        return ingredientId;
      }
    })
    .filter(Boolean);

  function handleEdit() {
    navigate(`/edit/${id}`);
  }

  if (value < 0) {
    setValue(0);
  }

  useEffect(() => {
    getPlate();
  }, []);

  useEffect(() => {
    {
      userId === "1" ? setAdmin("Admin") : null;
    }
  }, [userId, data]);

  return (
    <ContainerDetails>
      <ContainerBack>
        <button onClick={handleBack} >
          <IoIosArrowBack
            size={32}
            color="FFF"
            cursor="pointer"
          />
          Voltar
        </button>
        <div></div>
      </ContainerBack>

      <ContentDetails>
        <ContainerImagePlate>
          {filterPlate &&
            filterPlate?.map((item) => {
              return (
                <img src={`${baseUrl}/file/${item.banner}`} alt={item.title} />
              );
            })}
        </ContainerImagePlate>

        <ContainerContent>
          {filterPlate &&
            filterPlate?.map((item) => {
              return (
                <section>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </section>
              );
            })}

          <ContainerIngredients>
            {newIngredientId &&
              newIngredientId?.map((item) => {
                return <p key={item.id}>{item.name}</p>;
              })}
          </ContainerIngredients>

          {userId === "1" ? (
            <Button title="Editar prato" onClick={handleEdit} />
          ) : (
            <ContainerAddCar>
              {filterPlate &&
                filterPlate?.map((item) => {
                  return <Button title={`incluir - R$ ${item.price}`} />;
                })}
              <article>
                <IoAdd
                  size={24}
                  style={{ cursor: "pointer" }}
                  onClick={() => setValue((value) => value + 1)}
                />
                <strong>{value}</strong>
                <IoRemove
                  style={{ cursor: "pointer" }}
                  size={24}
                  onClick={() => setValue((value) => value - 1)}
                />
              </article>
            </ContainerAddCar>
          )}
        </ContainerContent>
      </ContentDetails>
    </ContainerDetails>
  );
}
