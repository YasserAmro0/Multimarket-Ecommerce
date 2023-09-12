import { Types } from "mongoose";

interface IPayload {
    userId?: Types.ObjectId;
    adminId?: number;
}

export default IPayload;