require 'rails_helper'

RSpec.describe Venue, type: :model do
  context "when the venue is created" do
    let (:venue) {Venue.new(
      name: "TD Garden",
      location: "Boston, MA"
      )}

      it "has a name attribute" do
        expect(venue.name).to eq("TD Garden")
      end

      it "has a location attribute" do
        expect(venue.location).to eq("Boston, MA")
      end
  end
end
