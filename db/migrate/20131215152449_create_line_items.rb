class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.decimal :price
      t.belongs_to :order, index: true

      t.timestamps
    end
  end
end
