const axios = require('axios')

class TermiiToken {

    constructor(key) {
        this.api_key = key

        this.api = axios.create({
            baseURL: "https://api.ng.termii.com/api/sms/otp",
        })
    }

    async SendToken(options) {

        try {
            options.api_key = this.api_key

            const { data } = await this.api.post('/send', options)

            return data
        } catch (err) {
            return {
                success: false,
                statusCode: err.response.status,
                data: err.response.data
            }
        }

    }

    async GenerateInAppToken(options) {

        try {
            options.api_key = this.api_key

            const { data } = await this.api.post('/generate', options)

            return data
        } catch (err) {
            return {
                success: false,
                data: err.response.data
            }
        }

    }

    async VerifyToken(options) {

        try {
            options.api_key = this.api_key

            const { data } = await this.api.post('/verify', options)

            return data
        } catch (err) {
            return {
                success: false,
                data: err.response.data
            }
        }

    }

    async VoiceToken(options) {

        try {
            options.api_key = this.api_key

            const { data } = await this.api.post('/send/voice', options)

            return data
        } catch (err) {
            return {
                success: false,
                data: err.response.data
            }
        }

    }

    async VoiceCall(options) {

        try {
            options.api_key = this.api_key

            const { data } = await this.api.post('/call', options)

            return data
        } catch (err) {
            return {
                success: false,
                data: err.response.data
            }
        }

    }

}

module.exports = TermiiToken;