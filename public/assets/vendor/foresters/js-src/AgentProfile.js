export class AgentProfile {

    constructor(APM, profileForm) {
        this.APM = APM
        this.profileForm = profileForm

        this.initForm()
    }

    initForm() {
        this.profileForm.addEventListener('submit', evt => {
            console.log("loo" + new Date())
            evt.preventDefault();
        });

    }
}

