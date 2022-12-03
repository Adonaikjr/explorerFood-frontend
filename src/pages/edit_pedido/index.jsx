import { useState } from 'react'
import { Button } from '../../components/Button'
import { Container, Form, BoxA, BoxB, BoxC, Title, JustifyBtn } from './styled'
import { Input } from '../../components/Input'
import { api } from '../../service/api'

export function Editpedido() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [ingredient, setIngredient] = useState('')

  const token = localStorage.getItem('@explorerFood:token')

  const handleOnSubmit = async () => {
    try {
      api.post(
        '/products',
        {
          title,
          description,
          price,
          user_id: token,
          ingredient,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Form>
        <strong> &lt; Voltar </strong>
        <Title>Editar prato</Title>
        <BoxA>
          <div>
            <label>Imagem do prato</label>
            <Input type="file" />
          </div>
          <div>
            <label>Nome</label>
            <Input size={80} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </BoxA>
        <BoxB>
          <div>
            <label>ingredients</label>
            <Input size={96} onChange={(e) => setIngredient(e.target.value)} />
          </div>
          <div>
            <label>Preço</label>
            <Input
              type="number"
              placeholder="R$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </BoxB>
        <BoxC>
          <label>Descrição</label>
          <Input
            size={150}
            type="text"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />
        </BoxC>

        <JustifyBtn>
          <Button title="Adicionar pedido" onClick={handleOnSubmit} />
        </JustifyBtn>
      </Form>
    </Container>
  )
}
