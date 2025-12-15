import { errors } from "./errors";
import { CALC_DISP_MAX_LENGTH } from "../entities/constants";

const checkErrorMessageLengths = () => {
    Object.values(errors).forEach(error => {
        if (error.length > CALC_DISP_MAX_LENGTH)
            throw new RangeError(`Error string \`${error}\` has a length exceeding the maximum calculator display length (\`${CALC_DISP_MAX_LENGTH}\` character(s).)`);
    });
};

checkErrorMessageLengths();
