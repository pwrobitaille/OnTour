require 'rails_helper'

RSpec.describe ConcertBand, type: :model do
  describe "ConcertBands" do
    it {should belong_to(:concert)}
    it {should belong_to(:band)}
  end
end
