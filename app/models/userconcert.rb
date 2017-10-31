class Userconcert < ApplicationRecord
  belongs_to :user
  belongs_to :concert

end
