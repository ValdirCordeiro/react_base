import moment from "moment";

const FORMATO = "DD/MM/yyyy";

const DataUtil = {

    formatarData  : (data) => {
        const dia = moment(data);

        return dia.format(FORMATO);
    }
    
}

export default DataUtil;

