'use client'

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"


const CreatePost=()=>{
    const [submitting,setSubmiting]=useState(false)
    const [post,setPost]=useState({
        prompt:'',
        tag:''
    })

    const createPost=async(e)=>{}

    return(
        <div>
            <Form 
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPost}
            
            />
        </div>
    )
}


export default CreatePost