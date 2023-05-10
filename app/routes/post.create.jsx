import { createPost } from '~/models/post.server'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const title = formData.get('title')
  const price = parseInt(formData.get('price'))
  const img = 'NULL'
  const desc = formData.get('desc')

  try {
    await createPost(title, price, img, desc)

    return new Response({ status: 201 })
  } catch (error) {
    return new Response(`ERROR: ${error}`, { status: 500 })
  }
}
