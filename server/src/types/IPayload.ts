import { Types } from "mongoose";

interface IPayload {
    userId?: Types.ObjectId;
    isLogin?: boolean;
}

export default IPayload;