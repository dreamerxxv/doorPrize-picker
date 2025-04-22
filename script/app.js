const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: '',
            names: ['002', '0089', '0016', '0022', '0043'],
            error: 'error name',
            showError: false,
            result: '',
        }
    },

    computed: {
        isReady() {
            return this.names.length > 1
        }
    },

    methods: {
        addNameToList() {
            const username = this.inputName

            if(this.validateName(username)) {
                // Add to list
                this.names.push(username)
                // Reset input field 
                this.inputName = ''

                this.showError = false
            }

            else {
                this.showError = true
            }
        },

        validateName(value) {
            this.error = ''

            if(value === '') {
                this.error = 'the name is empty'
                return false
            }

            if(this.names.includes(value)) {
                this.error = 'the name already exists'
                return false
            }

            return true
        },

        removeName(index) {
            this.names.splice(index, 1)
            console.log(index)
        },

        resultWinner() {
            this.generateResult()
            this.state = false
        },

        getRandomName() {
            return this.names[Math.floor(Math.random() * this.names.length)]
        },

        generateResult() {
            let randName = this.getRandomName()
            // check if the first random name is the same as the result
            if(randName === '') {

                // regenerate random name from the list
                while(randName === this.result) {
                    randName = this.getRandomName()
                }
            }

            this.result = randName
        },

        resetApp() {
            this.state = true,
            this.names = [],
            this.error = '',
            this.showError = false
        },

        getNewWinner() {
            this.generateResult()
        }
    } 
}).mount('#app')