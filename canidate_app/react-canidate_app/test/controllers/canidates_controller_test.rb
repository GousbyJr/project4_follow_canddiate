require 'test_helper'

class CanidatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @canidate = canidates(:one)
  end

  test "should get index" do
    get canidates_url, as: :json
    assert_response :success
  end

  test "should create canidate" do
    assert_difference('Canidate.count') do
      post canidates_url, params: { canidate: { bio: @canidate.bio, name: @canidate.name, party: @canidate.party, photo: @canidate.photo, string: @canidate.string } }, as: :json
    end

    assert_response 201
  end

  test "should show canidate" do
    get canidate_url(@canidate), as: :json
    assert_response :success
  end

  test "should update canidate" do
    patch canidate_url(@canidate), params: { canidate: { bio: @canidate.bio, name: @canidate.name, party: @canidate.party, photo: @canidate.photo, string: @canidate.string } }, as: :json
    assert_response 200
  end

  test "should destroy canidate" do
    assert_difference('Canidate.count', -1) do
      delete canidate_url(@canidate), as: :json
    end

    assert_response 204
  end
end
