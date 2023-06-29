import Link from 'next/link'

const Users = ({ users }) => {
  return (
    <div className="w-full flex flex-col text-4xl  justify-center my-0 mx-auto bg-red-300  ">
      <h1>Users</h1>
      <ul className="flex flex-col gap-5">
        {users.map((user) => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <li key={user.id}>{user.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from jsonplaceholder API
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {
      users,
    },
  }
}

export default Users
