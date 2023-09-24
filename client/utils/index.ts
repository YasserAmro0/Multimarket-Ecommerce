import jwt, { JwtPayload } from 'jsonwebtoken'; // Import JwtPayload from 'jsonwebtoken'

interface CustomJwtPayload extends JwtPayload {
    isAdmin: boolean;
}
import moment from 'moment';

export const getTimeLeft = (targetDate: moment.Moment) => {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));

    return {
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
    };
};




export const isAdmin = (token:string) => {
    try {
        const decodedToken = jwt.decode(token) as CustomJwtPayload;;
        return decodedToken?.isAdmin === true;
    } catch (error) {
        return false;
    }
};
