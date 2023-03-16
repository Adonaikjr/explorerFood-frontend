import { Button } from "../../components/Button";
import { IoAdd, IoRemove } from "react-icons/all";
import {
  ContainerDetails,
  ContentDetails,
  ContainerAddCar,
  ContainerIngredientImage,
  ContainerContent,
  ContainerImagePlate,
  ButtonDelete,
} from "./styled";
import Icons from "../../assets/icon1.svg";
import { TiArrowBack, MdDeleteOutline } from "react-icons/all";
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

  const baseUrl = "http://localhost:3333";
  const users = 1;
  const userId = localStorage.getItem("@explorerFood:id");
  function handleBack() {
    navigate(-1);
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

  useEffect(() => {
    getPlate();
  }, []);

  if (value < 0) {
    setValue(0);
  }

  async function handleDelete() {
    const YesDeleteNote = window.confirm(
      "Deseja excluir o prato permanentemente?(não será possivel reverter)"
    );
    if (YesDeleteNote) {
      try {
        await api.delete(`plate/${data.id}`);
      } catch (error) {
        console.log("ooops algo deu errado", error);
      }
    }
  }

  useEffect(() => {
    {
      userId === "1" ? setAdmin("Admin") : null;
    }
  }, [userId, data]);

  return (
    <ContainerDetails>
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
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              );
            })}

          <ContainerIngredientImage>
            {newIngredientId &&
              newIngredientId?.map((item) => {
                return (
                  <li key={item.id}>
                    <img
                      src={`${baseUrl}/file/${item.banner}`}
                      alt={item.name}
                    />
                    {item.name}
                  </li>
                );
              })}
          </ContainerIngredientImage>

          <ContainerAddCar>
            <p>
              {filterPlate &&
                filterPlate?.map((item) => {
                  return <span>R$ {item.price}</span>;
                })}
            </p>
            <IoAdd
              size={24}
              style={{ cursor: "pointer" }}
              onClick={() => setValue((value) => value + 1)}
            />
            <strong> {value}</strong>
            <IoRemove
              style={{ cursor: "pointer" }}
              size={24}
              onClick={() => setValue((value) => value - 1)}
            />
            <Button title="Incluir" icon={Icons} />
          </ContainerAddCar>
          {admin === "Admin" ? (
            <ButtonDelete onClick={handleDelete}>
              Deletar prato <MdDeleteOutline size={24} />{" "}
            </ButtonDelete>
          ) : null}
        </ContainerContent>
      </ContentDetails>
    </ContainerDetails>
  );
}
