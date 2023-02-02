import { useState } from "react";
import { Button } from "../../components/Button";
import {
  Container,
  Form,
  BoxA,
  BoxB,
  BoxC,
  Title,
  JustifyBtn,
  Label,
  ContainerPrice,
} from "./styled";
import { Input } from "../../components/Input";
import { api } from "../../service/api";
import { NoteItem } from "../../components/NoteItem";
import { TiArrowBack } from "react-icons/all";
import { useNavigate } from "react-router-dom";
export function Editpedido() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [file, setFile] = useState(null);
  const [avatarURL, setAvatarURL] = useState();
  const [newIngredient, setNewIngredient] = useState([]);
  const [category, setCategory] = useState();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("ingredients", ingredient);

      if (category === "Pratos") {
        await api.post("/newplate", formData);
        alert("sucesso");
        navigate("/");
        return;
      }
      if (category === "Bebidas") {
        await api.post("/bebidas", formData);
        alert("sucesso");
        navigate("/");
        return;
      }
      if (category === "Sobremesas") {
        await api.post("/sobremesas", formData);
        alert("sucesso");
        navigate("/");
        return;
      }
    } catch (error) {
      console.log(error);
    }

    console.log(category);
  };

  function handleFile(event) {
    //colocando imagem
    const image = event.target.files[0];
    //verificando se tem imagem
    if (!event.target.files || !image) {
      return;
    }
    //recebendo tipos de imagem
    if (image.type === "file/jpeg" || image.type === "image/png") {
      setFile(image);
      setAvatarURL(URL.createObjectURL(event.target.files[0]));
    }
  }

  //adicionando TAG
  function handleAddTag() {
    if (newIngredient === "") {
      toast("Adicione ao menos uma TAG");
      return;
    }
    //pegando tydo
    setIngredient((stateProps) => [...stateProps, newIngredient]);
    setNewIngredient("");
  }
  //deletando a TAG
  function handleRemoveTag(deleted) {
    setIngredient((stateProps) => stateProps.filter((tag) => tag !== deleted));
  }
  function handleBack() {
    navigate("/");
  }

  return (
    <Container>
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
      <Form>
        <Title>Editar prato</Title>
        <BoxA>
          <div>
            <label>
              Imagem do prato
              <Input type="file" onChange={handleFile} />
            </label>
            {avatarURL && <img src={avatarURL} alt="prato" />}
          </div>

          <div>
            <label>
              Nome
              <Input
                placeholder="ex: Salada Cesar"
                size={80}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
        </BoxA>

        <BoxB>
          <Label>
            Ingredientes
            <NoteItem
              isNew
              size={96}
              placeholder="ex: Bebibas"
              onClick={handleAddTag}
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            {ingredient.map((tag, index) => {
              if (tag === "") {
                return;
              }
              return (
                <NoteItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveTag(tag)}
                />
              );
            })}
          </Label>

          <ContainerPrice>
            <label>
              Preço
              <Input
                type="number"
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </ContainerPrice>
        </BoxB>
        <label>
          Categoria
          <Input
            placeholder="ex: Bebidas"
            type="text"
            list="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <datalist id="category">
            <option value="Pratos">Pratos</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Sobremesas">Sobremesas</option>
          </datalist>
        </label>
        <BoxC>
          <label>
            Descrição
            <Input
              size={150}
              type="text"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </BoxC>

        <JustifyBtn>
          <Button title="Adicionar pedido" onClick={handleOnSubmit} />
        </JustifyBtn>
      </Form>
    </Container>
  );
}
