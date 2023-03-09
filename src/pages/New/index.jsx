import { useState } from 'react'
import { api } from '../../service/api'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import {
  ContainerNew,
  Article,
  BoxA,
  Form,
  AjustTitle,
  NewBoxA,
  StyleContainerButton,
} from './styled'
export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewlink] = useState('')

  const [categorys, setCategorys] = useState([])
  const [newCategory, setNewCategory] = useState('')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  function handleAddCategory() {
    setCategorys((prevState) => [...prevState, newCategory])
    setNewCategory('')
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewlink('')
  }

  function handleRemoveItem(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  function handleRemoveCategory(deleted) {
    setCategorys((prevState) =>
      prevState.filter((categorys) => categorys !== deleted),
    )
  }

  async function handleNewNote() {
    api.post('/products', {
      title,
      description,
      categorys,
      links,
    })
    navigate('/')
  }

  return <ContainerNew></ContainerNew>
}
