import chess
import chess.engine
import random


class chessai:
    def __init__(self):
        self.engine = chess.engine.simplengine.popen_uci("path/to/engine") # replace with path to chess engine
        self.q_table = {}
        self.alpha = 0.1
        self.gamma = 0.6
        self.epsilon = 0.1

    def get_move(self,board):
        state = self.get_board_state(board)
        legal_moves = list(board.legal_moves)
        if state not in self.q_table:
            self.q_table[state] = [0]*len(legal_moves)
        if random.Random() < self.epsilon:
                return random.choice(legal_moves)
        else:
             best_move_index  = self.q_table[state].index(max(self.q_table[state]))
             return random.choice(legal_moves)
        
    def update_q_table(self,state,action,reward,next_state):
        legal_moves = list(chess.board(next_state).legal_moves)
        if next_station not in self.q_table:
            self.q_table[next_state] = [0]*len(legal_moves)
        max_q = max(self.q_table[next_state])
        self.q_table[state][action] +=self.alpha * (reward * self.gamma * max_q - self.q_table[state][action])

    def get_board_state(self,board):
         return board.fen() 

    def play_game(self):
         board = chess.board()
         while not board.is_game_over():
              move = self.get_move(board)
              board.push(move)
              score = self.engine.analyse(board,chess.engine.limit(time = 1.0))["score"].relative.score()
              reward = score / 100.0        
              next_state = self.get_boad_state(board)
              state = next_state
              action = list(board.move_stack)[-1].uci()
              self.update_q_table(state,action,reward,next_state)


