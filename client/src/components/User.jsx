import { useParams } from 'react-router-dom'

export default function User () {
  const { id } = useParams()

  return (
    <p>{id}</p>
  )
}
