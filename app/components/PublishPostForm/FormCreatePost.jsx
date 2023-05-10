import InputText from './InputText'
import { useState } from 'react'
import InputNumber from './InputNumber'
import TextArea from './TextArea'
import SelectFile from './SelectFile'
import ToastAlert from './ToastAlert'

export default function FormCreatePost() {
  const timeOut = 5000

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [files, setFiles] = useState([])

  const [response, setResponse] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const handleImageSelect = (files) => {
    setFiles(files)
  }

  const handleCreatePost = async (evt) => {
    evt.preventDefault()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('price', price)
    formData.append('img', files)
    formData.append('desc', description)

    try {
      const res = await fetch('post/create', {
        method: 'POST',
        body: formData,
      })


      setResponse(res)

      if (res.status === 200) {
        setTitle('')
        setPrice('')
        setFiles([])
        setDescription('')
      }
    } catch (error) {
      setResponse(error)
    }

    setTimeout(() => {
      setResponse(null)
    }, timeOut)
  }

  return (
    <>
      {response?.status === 200 && (
        <>
          <ToastAlert
            success
            title="Nueva publicacion"
            info="La publicacion se realizo con exito"
            timeout={timeOut}
            position="top-right"
          />
        </>
      )}

      {response?.status === 500 && (
        <>
          <ToastAlert
            error
            title="Publicacion no realizada"
            info="Hubo un problema al realizar la publicacion"
            timeout={timeOut}
            position="top-right"
          />
        </>
      )}

      <form className="space-y-6" onSubmit={handleCreatePost}>
        <div className="flex justify-between gap-4">
          <InputText
            required
            onChangeInput={(evt) => setTitle(evt.target.value)}
            title="Titulo"
            name="title"
            placeholder="Ingresa un titulo"
            inputValue={title}
          />

          <InputNumber
            required
            onChangeInput={(evt) => setPrice(evt.target.value)}
            title="Precio"
            name="price"
            placeholder="Precio"
            inputValue={price}
          />
        </div>

        <SelectFile
          title="Escoger Imagen ..."
          name="file"
          onFileChange={handleImageSelect}
          multiple
          clearImages={files}
        />

        <div className="flex justify-between gap-4">
          <TextArea
            maxLength="250"
            textLength={description.length}
            height="5"
            onChangeInput={(evt) => setDescription(evt.target.value)}
            title="Descripcion"
            name="desc"
            placeholder="Escribe la descripcion de la publicación"
            inputValue={description}
            required
          />
        </div>

        <div className="flex gap-8 justify-center">
          <button
            type="submit"
            className={`w-full text-base block ${
              response && 'bg-gray-400 hover:bg-gray-500 pointer-events-none'
            } text-white bg-[#3AB795] hover:bg-[#137057] font-medium rounded-lg px-5 py-2.5 text-center cursor-pointer`}>
            Publicar
          </button>
        </div>
      </form>
    </>
  )
}
