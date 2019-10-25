import { FormUpdater } from '/assets/vendor/foresters/js/FormUpdater.js';

export class AgentProfileForm {
    constructor(agent, form, APM) {
        this.agent = agent;
        this.APM = APM;
        this.form = form;

        this.initForm();
    }

    initForm() {
        new FormUpdater(this.form, this.agent);

        this.form.addEventListener('submit', evt => {
            let formData = new FormData(this.form);
            for (var pair of formData.entries()) {
                this.agent[pair[0]] = pair[1];
            }

            this.APM.saveAgent(this.agent);
            evt.preventDefault();
        });
    }
}