import { Option } from '@/constant/Option'
import { BaseResponse } from '@/constant/BaseResponse'

export class Question extends BaseResponse {

    /**
     * 
     * @param {api接口返回的查宿} res api接口返回的数据，假设是数组形式，一个问卷有多个问题
     */
    static buildFromResponse(res) {
        if(Object.prototype.toString.call(res) !== '[object Array]') {
            res = [res]
        }
        let generatedQues = res.map((item) => {
            let newSurvey = new Question();
            newSurvey.questionaireId = item.questionaireId
            newSurvey.questionType = item.questionType
            newSurvey.questionId = item.questionId
            newSurvey.content = item.questionContent
            newSurvey.id = item.id
            newSurvey.options = Option.buildFromResponse(item.options)
            return newSurvey
        })
        return generatedQues
    }

    constructor() {
        super()
        this.questionaireId = ''
        this.questionType = ''
        this.questionId = ''
        this.questionContent = ''
        this.id = ''
        this.options = []
    }

}