new Vue({
    el: '#app',
    data: {
        vidaJogador: 100,
        vidaMonstro: 100,
        ataqueJogador: [5, 10],
        ataqueMonstro: [7, 12],
        ataqueEspecial: 5,
        curarJogador: [10, 15],
        resulDanoJ: '',
        resulDanoM: '',
        resulCuradoJ: '',

        iniciarGame: false

    },
    methods: {
        ataqueScores() {
            let danoJogador = Math.floor(Math.random() * (this.ataqueJogador[1] - this.ataqueJogador[0]) + this.ataqueJogador[0]);
      
            this.vidaMonstro -= danoJogador;
            this.resulDanoJ = danoJogador;

            let danoMonstro = Math.floor(Math.random() * (this.ataqueMonstro[1] - this.ataqueMonstro[0]) + this.ataqueMonstro[0]);

            this.vidaJogador -= danoMonstro;
            this.resulDanoM = danoMonstro;

            if(this.vidaJogador < 0) {
                this.vidaJogador = 0;
            } else if (this.vidaMonstro < 0) {
                this.vidaMonstro = 0;
            }

        },
        especialScores() {
            let danoEspecialJogador = Math.floor(Math.random() * (this.ataqueJogador[1] - this.ataqueJogador[0]) + this.ataqueJogador[0]) + this.ataqueEspecial;

            this.vidaMonstro -= danoEspecialJogador;

            let danoEspecialMonstro = Math.floor(Math.random() * (this.ataqueMonstro[1] - this.ataqueMonstro[0]) + this.ataqueMonstro[0]) + this.ataqueEspecial;

            this.vidaJogador -= danoEspecialMonstro;

            this.resulDanoM = danoEspecialMonstro;
            this.resulDanoJ = danoEspecialJogador;

            if(this.vidaJogador < 0) {
                this.vidaJogador = 0;
            } else if (this.vidaMonstro < 0) {
                this.vidaMonstro = 0;
            }

        },
        curarScores() {
            let jogadorCurado = Math.floor(Math.random() * (this.curarJogador[1] - this.curarJogador[0]) + this.curarJogador[0]);
            let danoMonstro = Math.floor(Math.random() * (this.ataqueMonstro[1] - this.ataqueMonstro[0]) + this.ataqueMonstro[0]);

            this.vidaJogador -= danoMonstro;
            this.vidaJogador += jogadorCurado;

            this.resulDanoM = danoMonstro;
            this.resulCuradoJ = jogadorCurado;
        },
        gameIniciado() {
            this.iniciarGame = true;
            this.vidaJogador = 100;
            this.vidaMonstro = 100;

            this.resulDanoJ = ''
            this.resulDanoM = ''
            this.resulCuradoJ = ''

        },
        gameDesistido() {
            this.iniciarGame = false

            this.resulDanoJ = ''
            this.resulDanoM = ''
            this.resulCuradoJ = ''
        }
    },
})