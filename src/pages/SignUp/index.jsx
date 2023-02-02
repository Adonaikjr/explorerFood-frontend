import { Input } from "../../components/Input";
import { Background, ContainerSignin, Form } from "../SignIn/styled";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../service/api";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  function handleSignUp() {
    if ((!name, !email, !password)) {
      return toast("preencha todos os campos");
    }

    api
      .post("/users", { name: name, email: email, password: password })
      .then(() => {
        toast("Usuario cadastrado sucesso");
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          toast("nao foi possivel cadastrar");
        }
      });
  }

  return (
    <ContainerSignin>
      <Form>
        <h1>Crie sua conta</h1>
        <fieldset>
          <label>Seu nome</label>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />
          <label>E-mail</label>
          <Input
            placeholder="Email"
            type="email"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Criar conta" onClick={handleSignUp} />
        </fieldset>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
      <Background />
    </ContainerSignin>
  );
}
