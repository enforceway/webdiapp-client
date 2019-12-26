import service from '@/services/app.service'
import {Questionaire} from '@/constant/Questionaire'
export const qusetionaireSvc = (id) => {
    return service({
        url: `/questionaire/list/${id}`,
        params: {}
    }).then((data) => {
        if(data.status == 1 && data.code == '') {
            return Questionaire.buildFromResponse(data.data)
        }
        return Promise.reject(data);
    })
}
