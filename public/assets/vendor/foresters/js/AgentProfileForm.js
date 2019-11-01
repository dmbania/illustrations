import { FormUpdater } from '/assets/vendor/foresters/js/FormUpdater.js';

export class AgentProfileForm {
    constructor(agent, form, APM) {
        this.agent = agent || {};
        this.APM = APM;
        this.form = form;
        this.formUpdater = new FormUpdater(form);

        this.initForm();
    }

    initForm() {
        this.formUpdater.update(this.agent);

        window.document.querySelector('.save-form').addEventListener('click', evt => {
            const formData = new FormData(this.form);

            if (formData.get('agent-name').trim().length) {
                for (var pair of formData.entries()) {
                    this.agent[pair[0]] = pair[1];
                }

                let uid = this.APM.saveAgent(this.agent);
                this.agent['agent-uid'] = uid;
                this.formUpdater.update(this.agent);
                this.gotoIndex();
            } else {
                console.log('name requried');
            }

            evt.preventDefault();
        });

        document.querySelector('.cancel-form').addEventListener('click', evt => {
            this.gotoIndex();
            evt.preventDefault();
        });
    }

    gotoIndex() {
        window.location.href = '/agents/';
    }
}