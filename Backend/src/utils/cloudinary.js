import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: CLOUD_API_SECRET
    })

const uploadOnCloudinary = async (localhostPath) => {
    try {
        if (!localhostPath) return null;
    
        const response = await cloudinary.uploader.upload
        (localhostPath, {
            resource_type: "auto"
        })
        console.log("file uploaded Successfully on cloudinary:", response.url);
        return response;
    } 
    catch (error) {
        fs.unlinkSync(localhostPath);
        return null
    }
}

export default uploadOnCloudinary