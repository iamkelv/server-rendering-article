import React from 'react'

const User = ({ user }) => {
  return (
    <div className="w-full flex flex-col text-4xl justify-center my-0 mx-auto bg-red-300  ">
      <h1>
        {' '}
        <span>Name: </span>
        {user.name}
      </h1>
      <p>
        <span>Email:</span> {user.email}
      </p>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`,
  )
  const user = await response.json()

  return {
    props: {
      user,
    },
  }
}

export default User
