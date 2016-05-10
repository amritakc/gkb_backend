class Content < ActiveRecord::Base
	has_many :imgs
	belongs_to :section
end