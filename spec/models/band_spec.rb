require 'rails_helper'

  band = Band.create(name: "Phish")

RSpec.describe Band, type: :model do
  context "when band is created" do
    let (:band) {Band.new(name: "Phish")}
  end

  it "has a name attribute" do
    expect(band.name).to eq("Phish")
  end
  
  describe "Bands" do
    it { should have_many(:concert_bands)}
    it { should have_many(:concerts)}
  end
end
