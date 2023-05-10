import { Link } from '@remix-run/react'

export default function CardPost({
  userImg,
  userName,
  timeAgo,
  title,
  image,
  price,
  descripcion,
}) {
  return (
    <article className="my-2 w-[40%] max-lg:w-[65%] bg-white p-3 rounded-2xl shadow border-[1px] border-solid border-gray-200">
      <header className="flex gap-3 p-2">
        <img
          loading="lazy"
          src={userImg}
          alt="avatar__imagen"
          className="w-[40px] h-[40px] rounded-[50%]"
        />

        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium text-gray-800">{userName}</span>
          <span className="text-[0.775rem] text-gray-400">{timeAgo}</span>
        </div>
      </header>

      <section
        id="title"
        className="px-2 m-2 flex justify-between items-center">
        <h3 className="font-bold text-lg capitalize">{title}</h3>
        <p className="text-base text-gray-500 font-medium">${price}</p>
      </section>

      <section id="image" className="mt-1 p-2 bg-slate-100">
        <img
          loading="lazy"
          src={image}
          alt=""
          className="rounded-lg w-full h-[200px] object-cover"
        />
      </section>

      <section id="description" className="p-2">
        <p className="h-[80px] text-base text-justify overflow-y-auto scrollbar-hide">
          {descripcion}
        </p>
      </section>

      <footer className="p-2 mt-1">
        <Link to='/post'>
          <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer w-full text-center rounded-lg py-2 text-white font-medium">
            Comprar
          </button>
        </Link>
      </footer>
    </article>
  )
}
