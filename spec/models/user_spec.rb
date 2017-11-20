require 'rails_helper'

RSpec.describe User, type: :model do
  context "when the user is created" do
    let (:user) {User.new(
      email: "pwrobitaille@gmail.com",
      first_name: "Peter",
      last_name: "Robitaille"
      )}

      it "has an email attribute" do
        expect(user.email).to eq("pwrobitaille@gmail.com")
      end

      it "has a first name attribute" do
        expect(user.first_name).to eq("Peter")
      end

      it "has a last name attribute" do
        expect(user.last_name).to eq("Robitaille")
      end

    describe "Users" do
      it {should have_many(:userconcerts)}
      it {should have_many(:concerts)}
    end
  end
end
