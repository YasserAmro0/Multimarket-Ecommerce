import { Types } from "mongoose";

interface IPayload {
    userId?: Types.ObjectId;
    isAdmin?: boolean;
}

export default IPayload;