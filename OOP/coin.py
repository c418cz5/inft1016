import random
class Coin:
  def __init__(self):
    self.set_value()
    return
  def get_value(self):
    return self.__value
    
  def set_value(self):
    self.__value = random.randint(0,1)
    return
    
  def toss(self):
    self.set_value()
    return self.get_value()
  pass
coin = Coin()
print(coin.toss())
print(coin.toss())
print(coin.toss())
