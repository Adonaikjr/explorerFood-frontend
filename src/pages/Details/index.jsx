import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { BsDropletHalf, IoAdd, IoRemove } from "react-icons/all";
import { Tags } from "../../components/Tags";
import {
  ContainerDetails,
  ContentDetails,
  ContainerAddCar,
  ContainerIngredientImage,
} from "./styled";
import { TiArrowBack } from "react-icons/all";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../service/api";
import { useContext } from "react";
import { AuthContext } from "../../hooks/auth";
export function Details() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [value, setValue] = useState(0);
  const {setCountOrder} = useContext(AuthContext)

  //const [params, setParams] = useState()

  const { id } = useParams();
  
  const baseUrl = "http://localhost:3333";
  const admin = 1;

  function handleBack() {
    navigate(-1);
  }

  async function getPlate() {
    try {
      const res = await api.get(`plate/admin/${admin}`);
      setData(res.data.plates[id]);
      const resIngredient = await api.get(`ingredient/${admin}`);
      setIngredient(resIngredient);
    } catch (error) {
      console.log(error);
    }
  }
  const newIngredientId = ingredient.data
    ?.map((ingredientId) => {
      if (ingredientId.plate_id === data.id) {
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

  console.log();
  console.log(newIngredientId);
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
        <div>
          <img src={`${baseUrl}/file/${data.banner}`} alt={data.title} />
        </div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <ContainerIngredientImage>
            {newIngredientId &&
              newIngredientId.map((item) => {
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
          <p>
            <span> {data.price}</span>
          </p>
          <ContainerAddCar>
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

            <Button title="Incluir" />
          </ContainerAddCar>
        </div>
      </ContentDetails>
    </ContainerDetails>
  );
}
