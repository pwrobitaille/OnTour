require 'rails_helper'

RSpec.describe Concert, type: :model do
  context "when concert is created" do
    let (:concert) {Concert.new(
      year: "2017",
      attendees: "Billy, Andrew, Mike",
      setlist: "https://www.setlist.fm/setlist/dead-and-company/2017/td-garden-boston-ma-33e0e8b5.html",
      notes: "Awesome show",
      venue: "TD Garden"
      )}

      it "has a year attribute" do
        expect(concert.year).to eq("2017")
      end

      describe "Concerts" do
        it { should have_many(:bands)}
        it { should have_many(:concert_bands)}
        it { should have_many(:userconcerts)}
        it { should have_many(:users)}
      end
  end
end
