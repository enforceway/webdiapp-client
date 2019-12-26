import { BaseResponse } from '@/constant/BaseResponse'

export class Option extends BaseResponse {

    /**
     * 
     * @param {api接口返回的查宿} res api接口返回的数据，假设是数组形式，一个问卷中同一个问题有多个候选项
     */
    static buildFromResponse(res) {
        if(Object.prototype.toString.call(res) !== '[object Array]') {
            res = [res]
        }
        let generatedQues = res.map((item) => {
            let newSurvey = new Option();
            newSurvey.id = item.id
            newSurvey.optionContent = item.optionContent
            newSurvey.questionId = item.questionItemId
            newSurvey.selected = item.selected
            return newSurvey
        })
        return generatedQues
    }

    constructor() {
        super()
        this.id = ''
        this.optionContent = ''
        this.questionItemId = ''
        this.selected = []
    }

}