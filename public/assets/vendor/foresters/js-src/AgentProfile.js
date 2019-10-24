export class AgentProfile {

    constructor(APM, profileForm) {
        this.APM = APM
        this.profileForm = profileForm
        this.profileData = []

        this.initForm()
    }

    initForm() {
        this.profileForm.addEventListener('submit', evt => {

            let formData = new FormData(this.profileForm)

            for (var pair of formData.entries()) {
                this.profileData[pair[0]] = pair[1]
            }

            let profile_UID = this.APM.saveAgent(this.profileData)

            this.setUID(profile_UID)

            evt.preventDefault();
        });
    }

    setUID(uid) {
        const formUID = document.querySelector("[name='agent-uid']")
        formUID.value = uid
    }
}
