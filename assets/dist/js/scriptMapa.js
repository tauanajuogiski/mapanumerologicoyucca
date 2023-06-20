 // Defina suas variáveis e lógica aqui
 var params = new URLSearchParams(window.location.search);
 var nome = params.get('nome');
 var dataNascimento = params.get('data');
 var telefone = params.get('telefone');
 var whatsappNumber = '5519991042481'; // Substitua pelo número de telefone correto
 var textoBemVindo = '';
 var textoNumerologico = '';
 var textoContato = '';
 var textoAdd = '';
 var textocompleto = '';
 var speechPaused = false;
 var popupTimeout; 

 var numerologia = 0;
 var numeroTotal = 0;

 var userInfo = {
   name: nome,
   birthDate: dataNascimento,
   phone: telefone
 };

 function calcularNumeroNumerologia(dataNascimento) {
   const numeros = dataNascimento.split('-').map(Number);
   let soma = numeros.reduce((acc, curr) => acc + curr, 0);

   while (soma > 9 && soma !== 11 && soma !== 22) {
     const digitos = soma.toString().split('').map(Number);
     soma = digitos.reduce((acc, curr) => acc + curr, 0);
   }

   return soma;
 }

 function getMessage() {
    this.numerologia = calcularNumeroNumerologia(dataNascimento);
       if (this.numerologia <= 9 || this.numerologia == 11 || this.numerologia == 22){
         switch (this.numerologia) {
           case 1:
               this.textoNumerologico  `Liderança, inovação, independência e autoconfiança são as características desse número. Pessoas com esse número de expressão geralmente são empreendedoras e criativas, e gostam de liderar e assumir riscos. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 2:
               this.textoNumerologico = `Cooperação, diplomacia e sensibilidade são as características desse número. Pessoas com esse número de expressão são geralmente pacificadoras e buscam harmonia em suas relações. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 3:
               this.textoNumerologico = `Comunicação, criatividade e expressão são as características desse número. Pessoas com esse número de expressão são geralmente criativas e expressivas, e gostam de se comunicar e interagir com outras pessoas. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 4:
               this.textoNumerologico = `Estabilidade, organização e disciplina são as características desse número. Pessoas com esse número de expressão são geralmente trabalhadoras e responsáveis, e gostam de ter um plano e seguir uma rotina. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 5:
             this.textoNumerologico = `Mudança, liberdade e aventura são as características desse número. Pessoas com esse número de expressão são geralmente aventureiras e gostam de experimentar coisas novas e explorar novos horizontes. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 6:
             this.textoNumerologico = `Responsabilidade, equilíbrio e harmonia são as características desse número. Pessoas com esse número de expressão são geralmente preocupadas com o bem-estar dos outros e buscam harmonia em suas relações. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 7:
             this.textoNumerologico = `Introspecção, sabedoria e intuição são as características desse número. Pessoas com esse número de expressão são geralmente pensadoras profundas e têm uma forte conexão com sua intuição e espiritualidade. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 8:
             this.textoNumerologico = `Poder, autoridade e ambição são as características desse número. Pessoas com esse número de expressão são geralmente ambiciosas e buscam o sucesso e a realização material. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 9:
               this.textoNumerologico = `Compaixão, humanitarismo e espiritualidade são as características desse número. Pessoas com esse número de expressão são geralmente preocupadas com o bem-estar dos outros e têm uma forte conexão com a espiritualidade. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 11:
               this.textoNumerologico = `Esse número representa a intuição, a inspiração e a sensibilidade. Pessoas com esse número de expressão são geralmente altamente intuitivas e têm uma forte conexão com sua espiritualidade. Elas podem ser criativas e inspiradoras, mas também podem ser sensíveis demais e se sentirem sobrecarregadas com as emoções dos outros. Pessoas com esse número de expressão têm um grande potencial para serem líderes espirituais, professores e mentores. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
               break;
           case 22:
             this.textoNumerologico = `Esse número representa a maestria, a realização e o poder. Pessoas com esse número de expressão são geralmente capazes de alcançar grandes feitos e realizar coisas extraordinárias. Elas têm uma habilidade natural para manifestar suas visões e ideias em ações concretas, e podem ser muito influentes e poderosas. Pessoas com esse número de expressão têm um grande potencial para serem líderes visionários e empreendedores de sucesso. Com isso iniciamos o processo de auto-conhecimento, os números de expressão, também conhecidos como números do destino, representam sua essência e personalidade.`
             break;
         }
       } else {
         this.textoNumerologico = "Dados inválidos"
       }

     this.textoBemVindo =`Olá, ${this.userInfo.name}! O resultado foi ${this.numerologia}.`;
     this.textoAdd = `Você gostaria de se apronfundar mais sobre sua vida, conhecendo seus pontos fortes, o caminho exato para você alcançar seus objetivos, as habilidades que você deve se aprofundar para alcançar o sucesso e porque você atrai determinados tipos de pessoas e situações para a sua vida?`
     this.textoContato = 'Entre em contato conosco, estaremos disponíveis para te auxiliar nesse processo de auto-conhecimento e sabedoria.';
     
     this.textocompleto = textoBemVindo + ' ' + textoNumerologico + ' ' + textoAdd + ' ' + textoContato;
     document.getElementById('textoBemVindo').innerHTML = textoBemVindo;
     document.getElementById('textoNumerologico').innerHTML = textoNumerologico;
     document.getElementById('textoAdd').innerHTML = textoAdd;
     document.getElementById('textoContato').innerHTML = textoContato;
     speakText(textocompleto); // Adicionando a chamada para a função speak()

 }

 function speakText(text) {
   if ('speechSynthesis' in window) {
     var speech = new SpeechSynthesisUtterance(text);
     speech.lang = 'pt-BR';
     speech.rate = 1.2;
 
     speechPaused = false;
     // Verifica se a fala está pausada antes de reproduzir
     if (!speechPaused) {
       window.speechSynthesis.speak(speech);
     }
    }
  }

 function pauseSpeech() {
   if ('speechSynthesis' in window) {
     speechPaused = true;
     window.speechSynthesis.pause();
   }
 }

 function resumeSpeech() {
   if ('speechSynthesis' in window) {
     speechPaused = false;
     window.speechSynthesis.resume();
   }
 }
 function restartSpeech() {
   if ('speechSynthesis' in window) {
     speechPaused = false;
     window.speechSynthesis.cancel();
     getMessage();
   }
 }

 function entrarEmContato() {
   pauseSpeech()
   this.whatsappMessage = `Olá, tudo bem? Meu nome é ${this.userInfo.name}! Fiz o meu Mapa Numerológico e o resultado foi ${this.numerologia}, gostaria de me aprofundar mais neste auto-conhecimento!`;
   this.whatsappUrl = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(this.whatsappMessage)}`;
   window.open(this.whatsappUrl, '_blank');
 }
 
 window.addEventListener('beforeunload', function(event) {
 // Verificar se o áudio está sendo reproduzido
 if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
   pauseSpeech();
   window.speechSynthesis.cancel();
   }
 })
 
 window.addEventListener('DOMContentLoaded', function() {
   restartSpeech();
 });


 // Adicione os ouvintes de eventos para os botões de pausar e retomar
 document.getElementById('btnIniciarAudio').addEventListener('click', restartSpeech);
 document.getElementById('btnPausar').addEventListener('click', pauseSpeech);
 document.getElementById('btnRetomar').addEventListener('click', resumeSpeech);
 document.getElementById("btnReiniciar").addEventListener("click", restartSpeech);