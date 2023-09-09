import { Request } from 'express';

interface Decode {
    adminId?: string;
    userId?: string;
    role: string;
}
interface RequestWithUserRole extends Request {
    user?: Decode,
}

type Roles = 'user' | 'admin';

enum RolesForSelect {
    user = 'user',
    admin = 'admin',
}

export {
    Decode, RequestWithUserRole, RolesForSelect, Roles,
};