class ChangeAvailabilityDefaultInProducts < ActiveRecord::Migration[5.2]
  def change
    change_column_default :products, :availability, false
  end
end
