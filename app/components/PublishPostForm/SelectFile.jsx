import { useState } from 'react'
import { titleInputStyle } from './StylesPublishForm'
import { useEffect } from 'react'

export default function SelectFile({
  onFileChange,
  title,
  name,
  multiple,
  filesAccept,
  clearImages,
}) {
  const [urlImages, setUrlImages] = useState([])

  useEffect(() => {
    if (clearImages.length <= 0) {
      setUrlImages([])
    }
  }, [clearImages])

  const handleImageSelect = (e) => {
    const files = e.target.files
    const newUrlImages = []

    for (const file of files) {
      const url = URL.createObjectURL(file)
      newUrlImages.push({ url, file })
    }

    onFileChange(files)
    setUrlImages([...urlImages, ...newUrlImages])
  }

  const handleRemove = (fileToRemove) => {
    setUrlImages(urlImages.filter((file) => file !== fileToRemove))
  }

  return (
    <div className="w-full">
      <p className={titleInputStyle}>Seleccionar un archivo</p>

      <div className="flex gap-4 w-full align-middle">
        <label
          className={`${
            urlImages.length > 0
              ? 'w-3/4 items-center h-[100px] mt-[25px] justify-center'
              : 'w-full'
          }  flex gap-4 p-3 capitalize rounded-lg cursor-pointer border-solid border-2 border-gray-300 hover:border-gray-500`}>
          <svg
            className="w-8 h-8 align-middle"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-1 text-sm font-medium leading-normal text-gray-600">
            {title}
          </span>
          <input
            name={name}
            multiple={multiple && true}
            accept={filesAccept}
            type="file"
            className="hidden"
            onChange={handleImageSelect}
          />
        </label>

        {urlImages.length > 0 && (
          <div className="flex overflow-x-auto w-full gap-5 scrollbar-hide">
            {urlImages.map((file) => (
              <img
                onClick={() => handleRemove(file)}
                key={file.url}
                className="h-[150px] w-[250px] object-scale-down rounded-2xl"
                src={file.url}
                alt="Previsualizacion de imagen"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
