class CanidatesController < ApplicationController
  before_action :set_canidate, only: [:show, :update, :destroy]

  # GET /canidates
  def index
    @canidates = Canidate.all

    render json: @canidates
  end

  # GET /canidates/1
  def show
    render json: @canidate
  end

  # POST /canidates
  def create
    @canidate = Canidate.new(canidate_params)

    if @canidate.save
      render json: @canidate, status: :created, location: @canidate
    else
      render json: @canidate.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /canidates/1
  def update
    if @canidate.update(canidate_params)
      render json: @canidate
    else
      render json: @canidate.errors, status: :unprocessable_entity
    end
  end

  # DELETE /canidates/1
  def destroy
    @canidate.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_canidate
      @canidate = Canidate.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def canidate_params
      params.require(:canidate).permit(:name, :party, :string, :bio, :photo)
    end
end
