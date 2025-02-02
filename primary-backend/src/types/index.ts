import  { z } from  "zod"

export  const signUpSchema = z.object({
    username : z.string().email(),
    password : z.string(),
    name : z.string()
})
export  const signInSchema = z.object({
    username : z.string().email(),
    password : z.string(),
})

export const zapCreateSchema = z.object({
    availableTriggerId : z.string(),
    triggerMetaData : z.any().optional(),
    actions : z.array(z.object({
        availableActionId : z.string(),
        actionMetaData : z.any().optional(),
    }))
})