import mongoose from "mongoose";
import validator from "validator";


const applicationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide your name!"],
        minLength:[3,"Name must contains at least 3 characters!"],
        maxLength:[30,"Name cannot exceed 30 characters!"],
    },
    email:{
         type:String,
         required:[true,"please provide your email!"],
         validate:[validator.isEmail, "Please provide a valid email!"],
    },
    phone:{
        type:Number,
        required:[true,"Please provide your phone number!"]
    },
    coverLetter:{
        type:String,
        required:[true,"Please provide your cover Letter!"]
    },
    address:{
        type:String,
        required:[true,"Please provide your Address!"]
    },
    resume:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    applicantID:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        role:{
            type:String,
            enum:["Job Seeker"],
            required:true
        }
    },
    employerID:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        role:{
            type:String,
            enum:["Employer"],
            required:true
        }
    }
});

export const Application =mongoose.model("Application",applicationSchema);