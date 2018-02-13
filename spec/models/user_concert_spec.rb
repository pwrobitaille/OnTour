require 'rails_helper'

RSpec.describe Userconcert, type: :model do
  describe "Userconcerts" do
    it { should belong_to(:concert)}
    it { should belong_to(:user)}
  end
end
