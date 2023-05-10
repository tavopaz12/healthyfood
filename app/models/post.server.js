import { db } from '~/config/db'

export function createPost (title, price, img, desc) {
  return db.post.create({
    data: {
      title,
      price,
      img,
      desc
    }
  })
}

export function getPosts () {
  return db.post.findMany()
}
