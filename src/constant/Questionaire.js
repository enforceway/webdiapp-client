import { Question } from '@/constant/Question'
import { BaseResponse } from '@/constant/BaseResponse'

export class Questionaire extends BaseResponse {

    static buildFromResponse(res) {
        let newSurvey = new Questionaire();
        newSurvey.title = res.title
        newSurvey.id = res.id
        newSurvey.statusId = res.statusId
        newSurvey.questions = Question.buildFromResponse(res.questionsList)
        newSurvey.activeDateEnd = res.activeDateEnd
        newSurvey.activeDateStart = res.activeDateStart
        return newSurvey
    }
    constructor() {
        super()
        this.title = ''
        this.statusId = ''
        this.questions = []
        this.id = ''
        this.activeDateEnd = ''
        this.activeDateStart = ''
        this.creationTimestamp = ''
        this.creationUser = ''
    }
}