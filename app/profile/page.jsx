"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Profile from "@components/Profile"

const myProfile = () => {
    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile 
        name="My"
        desc="Welcome to your personalized profile page"
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default myProfile