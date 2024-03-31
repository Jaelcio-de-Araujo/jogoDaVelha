document.addEventListener("DOMContentLoaded", function () {

 // Seleciona todas as células do tabuleiro
 const cells = document.querySelectorAll('.cell');

 // Define o jogador atual como 'X' no início do jogo
 let currentPlayer = 'X';

 // Define uma matriz que representa o tabuleiro
 const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
 ];

 // Função para verificar se um jogador venceu o jogo
 function checkWinner(symbol) {
    // Verifica linhas e colunas
    for (let i = 0; i < 3; i++) {
       if (
          (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) ||
          (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol)
       ) {
          return true; // Se houver uma linha ou coluna completa, retorna true
       }
    }

    // Verifica diagonais
    if (
       (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
       (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
    ) {
       return true; // Se houver uma diagonal completa, retorna true
    }

    return false; // Se nenhum dos casos acima for verdadeiro, retorna false
 }

 // Adiciona um evento de clique a cada célula do tabuleiro
 cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
       // Verifica se a célula está vazia
       if (!cell.textContent) {
          // Preenche a célula com o símbolo do jogador atual
          cell.textContent = currentPlayer;

          // Atualiza a matriz do tabuleiro com o símbolo do jogador atual
          const row = Math.floor(index / 3);
          const col = index % 3;
          board[row][col] = currentPlayer;

          // Verifica se o jogador atual venceu
          if (checkWinner(currentPlayer)) {
             alert(`O jogador ${currentPlayer} venceu!`);
             // Reinicia o jogo
             resetGame();
          } else {
             // Alterna para o próximo jogador
             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          }
       }
    });
 });

 // Adiciona um evento de clique ao botão "Reiniciar Jogo"
 document.getElementById('reset').addEventListener('click', resetGame);

 // Função para reiniciar o jogo
 function resetGame() {
    // Limpa o conteúdo de todas as células do tabuleiro
    cells.forEach(cell => {
       cell.textContent = '';
    });
    // Reinicia a matriz do tabuleiro
    for (let i = 0; i < 3; i++) {
       for (let j = 0; j < 3; j++) {
          board[i][j] = null;
       }
    }
    // Define o jogador atual como 'X' novamente
    currentPlayer = 'X';
 }


});