module.exports = {
    'SalaryIntentHandler':{
        canHandle(handlerInput) {
            const request = handlerInput.requestEnvelope.request;
            console.log("Inside GratificationHandler");
            console.log(JSON.stringify(request));
            return request.type === "IntentRequest" &&
                   (request.intent.name === "SalaryIntent" || request.intent.name === "AMAZON.StartOverIntent");
          },
          handle(handlerInput) {
            console.log("Inside GratificationHandler - handle");
            const attributes = handlerInput.attributesManager.getSessionAttributes();
            const response = handlerInput.responseBuilder;
        
            var question = askQuestion(handlerInput);
            var speakOutput = 'The goal of this section is to thank the company for extending you an offer. We would like to emphasize our interest in the position. <break time="2s"/> Here we go: Hi Chelsea! The team was very excited to meet you and I’d love to share the details of your offer: $125k base, $300k RSUs (over 4 years) and $20k sign on bonus. <break time="10s"/><break time="10s"/> Sample Response: Really excited about the team! Thank you for the offer. I’ll need time to review this, can we speak in a few days? In the meantime, I have a few questions for you.';
        
            return response.speak(speakOutput)
                           .getResponse();
          },
    }
}