import { Inngest } from "inngest";
import connectDb from "./db";
import User from "@/Models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "E-Kart-next" });


//Inngest Function to save user data to db 


export const syncUserCreation = inngest.function(
    {
    id:'sync-user-creation'
    },
    {event:'clerk/user.created'},

    async ({event}) =>{
     const{id,first_name,last_name,email_addresses,image_url}=event.data
     const userData ={
        _id:id,
        emailId:email_addresses[0].email_address,
        userName:first_name + " " +last_name,
        imageUrl:image_url
        
     }
     await connectDb()
     await User.create(userData)
    }

)


//Inngest Function to Update user data to db 


export const syncUserUpdate = inngest.createFunction(
    {
        id:'update-user-from-clerk'
    },{
        event:'clerk/user.updated'
    },
    async ({event}) =>{
        const{id,first_name,last_name,email_addresses,image_url}=event.data
        const userData ={
           _id:id,
           emailId:email_addresses[0].email_address,
           userName:first_name + " " +last_name,
           imageUrl:image_url
           
        }
        await connectDb()
        await User.findByIdAndUpdate(id,userData)
       }
   

)


//ingest function to delete user data from db

export const syncDeleteUser =inngest.function(
    {
        id:'sync-user-delete'
    },
    {event:'clerk/user.deleted'},
    async({event})=>{
        const{id}=event.data
       

        await connectDb()
        await User.findByIdAndDelete(id);
    }
)

