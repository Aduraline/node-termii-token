# node-termii-token

A node package for seamless integration with [Termii token](https://developers.termii.com/token).

### Installation

`npm install node-termii-token`

### Documentation

Please see the most up-to-date Termii token API documentation [here](https://developers.termii.com/)

#### Usage

- Initialize node-termii-token

```
const { TermiiToken } = require('node-termii-token')

const service = new TermiiToken('Your API key')
```

- Send Token

```
const response = await service.SendToken({
    "message_type" : "NUMERIC",
     "to" : "eg. 2348109077743",
     "from" : "Your SENDER ID",
     "channel" : "dnd",
     "pin_attempts" : 10,
     "pin_time_to_live" :  5,
     "pin_length" : 6,
     "pin_placeholder" : "< 1234 >",
     "message_text" : "Your pin is < 1234 >",
     "pin_type" : "NUMERIC"
})
```

- Generate In-App Token

```
const response = await service.GenerateInAppToken({
    "pin_type": "NUMERIC",
   "phone_number": "e.g 2348109477743",
   "pin_attempts": 3,
   "pin_time_to_live": 0,
   "pin_length": 6
})
```

- Verify Token

```
const response = await service.VerifyToken({
    "pin_id": "c8dcd048-5e7f-4347-8c89-4470c3af0b",
    "pin": "195558"
})
```

- Voice Token

```
const response = await service.VoiceToken({
     "phone_number" : "e.g 23409800000000",
     "pin_attempts" : 10,
     "pin_time_to_live" :  5,
     "pin_length" : 6,
})
```

- Voice Call

```
const response = await service.VoiceCall({
    "phone_number" : "e.g 23409800000000",
    "code" : 55675,
})
```

> Made with :heart: by <a href="https://github.com/Aduraline" target="_blank">Enoch Olutunmida</a>

