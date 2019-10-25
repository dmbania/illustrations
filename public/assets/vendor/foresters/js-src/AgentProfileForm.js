import { FormUpdater } from '/assets/vendor/foresters/js/FormUpdater.js'

export class AgentProfileForm {

    constructor(agent, form) {
        this.agent = agent
        this.form = form

        this.initForm()
    }

    initForm() {
        new FormUpdater(this.form, this.agent)
    }

    initForm_OLD() {
        this.profileForm.addEventListener('submit', evt => {

            let formData = new FormData(this.profileForm)

            for (var pair of formData.entries()) {
                this.profileData[pair[0]] = pair[1]
            }

            let profile_UID = this.APM.saveAgent(this.profileData)

            evt.preventDefault();
        });
    }
}
