/*
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.
*/
<script>
const nome = prompt("Qual o seu nome ?")
const idade = prompt("Quantos anos voçê tem ?")
const linguagem = prompt("Qual linguagem voçê está aprendendo ?") 

alert("Olá" + nome + ", voçê tem " + idade + " e já está aprendendo " + linguagem);
</script>
