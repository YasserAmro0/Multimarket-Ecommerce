import { Types } from "mongoose";

interface IPayload {
    userId?: Types.ObjectId;
    admin?: string;
}

export default IPayload;