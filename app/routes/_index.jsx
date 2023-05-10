import { useState } from 'react'
import Modal from '~/components/PublishPostForm/Modal'
import FormCreatePost from '~/components/PublishPostForm/FormCreatePost'
import { useLoaderData } from '@remix-run/react'
import CardPost from '~/components/PostCards/CardPost'
import { getPosts } from '~/models/post.server'

import avatar from '~/assets/grid_10.webp'
import img from '~/assets/siete-claves-para-ofrecer-platos-saludables-atractivos-a-los-comensales.jpg'
export const meta = () => {
  return [{ title: 'Healthy Food' }]
}
 
export const loader = async () => {
  const posts = await getPosts()

  return { posts }
}

export default function Index () {
  const [showModal, setShowModal] = useState(false)
  const { posts } = useLoaderData()

  const handleToogleModal = () => {
    return setShowModal(!showModal)
  }

  return (
    <div>
      <button
        onClick={handleToogleModal}
        className="text-base m-4 fixed rounded-2xl block text-white bg-[#3AB795] hover:bg-[#137057] font-medium px-5 py-2.5 text-center cursor-pointer">
        Publicar
      </button>

      {showModal && (
        <Modal onClose={handleToogleModal} title="Crear Nueva Publicación">
          <FormCreatePost />
        </Modal>
      )}

      <div className="flex w-full justify-center items-center flex-col gap-5">
        {posts.map((post) => (
          <CardPost
            key={post.id}
            userName="Jose octavio paz"
            userImg={avatar}
            image={img}
            timeAgo={post.createdAt}
            title={post.title}
            price={post.price}
            descripcion={post.desc}
          />
        ))}
      </div>
    </div>
  )
}
